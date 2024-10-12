import { useEffect } from 'react';

const InstagramReelsComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <blockquote 
        className="instagram-media" 
        data-instgrm-permalink="https://www.instagram.com/reel/DAD4bdMylqU/?utm_source=ig_embed&amp;utm_campaign=loading" 
        data-instgrm-version="14" 
        style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: '0', width: '99.375%' }}>
        <div style={{ padding: '16px' }}>
          <a href="https://www.instagram.com/reel/DAD4bdMylqU/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: '0', padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '40px', marginRight: '14px', width: '40px' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', height: '14px', marginBottom: '6px', width: '100px' }}></div>
                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', height: '14px', width: '60px' }}></div>
              </div>
            </div>
            <div style={{ padding: '19% 0' }}></div>
            <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
              {/* SVG code for Instagram reel */}
            </div>
            <div style={{ paddingTop: '8px', color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontWeight: 550, lineHeight: '18px' }}>
              View this post on Instagram
            </div>
          </a>
          <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: '0', marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <a href="https://www.instagram.com/reel/DAD4bdMylqU/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ color: '#c9c8cd', textDecoration: 'none' }} target="_blank">
              A post shared by Kaya Planet Beauty Salon &amp; Academy (@kayaplanetbeautysalon)
            </a>
          </p>
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramReelsComponent;
