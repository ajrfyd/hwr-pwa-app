const newMapScript = (src: string): Promise<void | ErrorEvent> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src + '&autoload=false';
    script.type = 'text/javascript';
    script.addEventListener('load', () => resolve());
    script.addEventListener('error', (e) => reject(e));
    document.head.appendChild(script);
  });
};

export default newMapScript;
