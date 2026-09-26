import React, { useCallback, useEffect, useRef, useState } from 'react';
import SiriOrb from './smoothui/SiriOrb.jsx';
import MetalButton from './ui/MetalButton.jsx';

const LIBRARY_SRC = 'https://doc-box-pichat-app.onrender.com/?embed=1';

async function requestLibraryReady(signal) {
  const response = await fetch('/api/chat-library/ready', {
    headers: { Accept: 'application/json' },
    cache: 'no-store',
    signal,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.ok) {
    throw new Error(data.message || 'Chat Library is still waking up.');
  }
  return data;
}

export default function ChatLibraryFrame() {
  const [phase, setPhase] = useState('waking');
  const [message, setMessage] = useState('Preparing your saved conversation workspace…');
  const [frameLoaded, setFrameLoaded] = useState(false);
  const retryTimer = useRef(null);

  const wakeLibrary = useCallback(async () => {
    if (retryTimer.current) {
      window.clearTimeout(retryTimer.current);
      retryTimer.current = null;
    }

    setPhase('waking');
    setMessage('Preparing your saved conversation workspace…');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 70000);

    try {
      await requestLibraryReady(controller.signal);
      setPhase('ready');
      setMessage('');
    } catch (error) {
      const aborted = error?.name === 'AbortError';
      setPhase('error');
      setMessage(aborted
        ? 'The Chat Library is taking longer than expected to wake.'
        : (error?.message || 'The Chat Library is still waking up.'));
      retryTimer.current = window.setTimeout(() => {
        wakeLibrary();
      }, 4500);
    } finally {
      window.clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    wakeLibrary();
    return () => {
      if (retryTimer.current) window.clearTimeout(retryTimer.current);
    };
  }, [wakeLibrary]);

  useEffect(() => {
    if (phase !== 'ready') return undefined;
    const keepWarm = window.setInterval(() => {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 20000);
      requestLibraryReady(controller.signal).catch(() => undefined).finally(() => window.clearTimeout(timeout));
    }, 8 * 60 * 1000);
    return () => window.clearInterval(keepWarm);
  }, [phase]);

  return (
    <div className="relative h-[calc(100vh-150px)] min-h-[760px] w-full overflow-hidden bg-slate-950">
      {phase === 'ready' && (
        <iframe
          title="PI Chat Library"
          src={LIBRARY_SRC}
          className={`block h-full w-full border-0 bg-slate-950 transition-opacity duration-500 ${frameLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setFrameLoaded(true)}
        />
      )}

      {(phase !== 'ready' || !frameLoaded) && (
        <div className="absolute inset-0 z-20 grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_35%,rgba(167,139,250,0.12),transparent_34rem),linear-gradient(145deg,#090b12,#0c0b13)]">
          <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
            <div className="absolute left-[12%] top-[18%] h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute bottom-[12%] right-[14%] h-56 w-56 rounded-full bg-fuchsia-400/10 blur-3xl" />
          </div>
          <div className="relative flex max-w-lg flex-col items-center px-8 text-center">
            <SiriOrb size="150px" state={phase === 'error' ? 'error' : 'thinking'} />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">Chat Library</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              {phase === 'error' ? 'Still waking up' : 'Opening your library'}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/48">{message || 'Loading the workspace…'}</p>
            {phase === 'error' && (
              <MetalButton
                type="button"
                onClick={wakeLibrary}
                className="pi-glass-control mt-5 rounded-xl border border-white/12 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white/70 hover:bg-white/10 hover:text-white"
              >
                Retry now
              </MetalButton>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
