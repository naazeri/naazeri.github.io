import { useEffect } from 'react';
import Container from '../components/Container';
import SocialIcons from '../components/SocialIcons';
import useAppStore from '../store/useAppStore';

function HomePage() {
  const { setLang } = useAppStore();

  useEffect(() => {
    setLang('en');
  }, [setLang]);

  return (
    <Container>
      <img
        className="w-52 h-52 shadow-[0px_0px_40px_1px_#000000aa] rounded-full object-cover"
        src={'/images/reza-nazeri-3.webp'}
        alt={'reza nazeri profile image'}
      />
      <h1 className="myName">- Reza Nazeri -</h1>
      <SocialIcons />
    </Container>
  );
}

export default HomePage;
