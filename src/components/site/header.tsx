'use client';
import { useState } from 'react';
import { Menu, X, Scissors, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const links = [['Serviços', '#servicos'], ['Nossa essência', '#essencia'], ['Equipe', '#equipe'], ['O espaço', '#galeria'], ['Contato', '#contato']];
export function Header() {
 const [open, setOpen] = useState(false);
 return <header className="site-header"><a href="#inicio" className="brand" aria-label="Thomas Barber, início"><Scissors size={27}/><span>THOMAS<span className="brand-sub">BARBER CLUB</span></span></a><nav className="desktop-nav" aria-label="Navegação principal">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><Button asChild className="header-cta"><a href="#agendamento">Agendar horário <ArrowUpRight size={16}/></a></Button><button type="button" className="mobile-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-nav">{open ? <X/> : <Menu/>}</button>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação móvel">{[...links, ['Agendar horário', '#agendamento']].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}</header>;
}
