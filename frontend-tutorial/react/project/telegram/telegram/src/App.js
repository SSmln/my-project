import './App.css';

function App() {
  return (
   <div className="app">
    <aside className="side-menu">
      <div className='side-menu-items' >
        <span>아이콘</span>
        
       </div>
    </aside>
    <div className='chats'>
      <div className="header">
       아이콘  telegram 검색
      </div>
      <div className="chatprofle">

      chat-profile
      </div>

    </div>
    <div className="chat">
    <div className="selectedProfile">
     닫기 아이콘 이름 옵션
    </div>
      chat

    </div>
    <div className="input">
      
      <input type="text" placeholder='Message' />
    
    </div>

   </div>
  )
}

export default App;
