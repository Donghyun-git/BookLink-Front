import * as Styled from './Styled';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useState, useRef, useEffect } from 'react';
import { getChatRooms, getChatRoom } from '../../lib/apis/chat/chatService';
const ChatForm = ({ room_id = 1, sender = '캐치카페' }) => {
  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    const socket = new SockJS('ws/chat');
    const client = Stomp.over(socket);
    console.log(client);
    client.connect({}, () => {
      console.log('Connected to WebSocket');
      setStompClient(client);
    });
    return () => {
      if (client) {
        client.disconnect();
      }
    };
  }, []);
  const sendMessage = (e) => {
    const message = inputRef.current.value;
    if (e.key === 'Enter' && message) {
      stompClient.send(
        '/pub/api/v1/chat/message',
        { 'content-type': 'application/json' },
        JSON.stringify({ room_id, sender, message })
      );
    }
  };
  console.log(stompClient);

  useEffect(() => {
    const { data } = getChatRooms();
    const { data: data1 } = getChatRoom(room_id);
    console.log(data1);
    console.log(data);
    if (stompClient) {
      // 메시지 구독 설정
      try {
        const subscription = stompClient.subscribe(
          `/sub/api/v1/chat/room/${room_id}`,
          (message) => {
            console.log(message);
            const newMessage = JSON.parse(message.body);
            setMessages((prevMessages) => [...prevMessages, newMessage]);
          }
        );
        return () => {
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error(error.response);
      }
    }
  }, [stompClient]);

  /*return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.content}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};*/
  return (
    <Styled.ChatContainer>
      <Styled.Header>1:1 채팅</Styled.Header>
      <Styled.Main>
        <Styled.Aside></Styled.Aside>
        <Styled.Section>
          <Styled.Menu></Styled.Menu>
          <Styled.Messages>
            {messages.map((message, index) => (
              <div key={index}>{message.content}</div>
            ))}
          </Styled.Messages>
          <Styled.ChatInput
            type="text"
            ref={inputRef}
            onKeyDown={sendMessage}
          />
        </Styled.Section>
      </Styled.Main>
    </Styled.ChatContainer>
  );
};

export default ChatForm;
