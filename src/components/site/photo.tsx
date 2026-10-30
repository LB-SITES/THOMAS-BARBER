'use client';
import { useState, type ImgHTMLAttributes } from 'react';
import { Scissors } from 'lucide-react';
export function Photo(props: ImgHTMLAttributes<HTMLImageElement>) {
 const [failed, setFailed] = useState(false);
 if (failed) return <div className={`${props.className ?? ''} photo-fallback`} role="img" aria-label={`${props.alt}. Fotografia indisponível nesta conexão.`}><Scissors aria-hidden="true"/><span>THOMAS BARBER CLUB</span><small>Fotografia ilustrativa indisponível nesta conexão</small></div>;
 return <img {...props} onError={() => setFailed(true)}/>;
}
