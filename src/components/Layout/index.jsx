import { Header } from './Header';
import Footer from './Footer/FooterMain';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ChatForm from '../Chat/ChatForm';

function Layout() {
  const { isChatIn } = useSelector((state) => state.CHAT);
  return (
    <div>
      <Header />
      {isChatIn && <ChatForm />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
