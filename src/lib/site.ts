// Conteúdo editorial demonstrativo. Substituir por informações aprovadas antes da publicação.
export const services = [
  { name: 'Corte clássico', description: 'Precisão nos detalhes. Um corte que respeita seu estilo e valoriza sua identidade.', price: 6000, duration: 30, image: 'photo-1503951914875-452162b0f3f1', tag: 'O ESSENCIAL' },
  { name: 'Barba & ritual', description: 'Toalha quente, acabamento preciso e o cuidado que sua barba merece.', price: 4500, duration: 30, image: 'photo-1621605815971-fbc98d665033', tag: 'SEU MOMENTO' },
  { name: 'Corte & barba', description: 'A experiência completa. Cabelo e barba em perfeita sintonia, do início ao fim.', price: 9500, duration: 30, image: 'photo-1599351431202-1e0f0137899a', tag: 'A EXPERIÊNCIA COMPLETA' },
];
export const team = [ { name: 'Thomas', role: 'Cortes clássicos & tesoura', image: 'photo-1582893561942-d61adcb2e534' }, { name: 'Rafael', role: 'Degradê & estilo contemporâneo', image: 'photo-1621605815971-fbc98d665033' }, { name: 'Lucas', role: 'Barba & acabamento', image: 'photo-1503951914875-452162b0f3f1' } ];
export const photo = (id: string, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
export const money = (cents: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(cents / 100);
