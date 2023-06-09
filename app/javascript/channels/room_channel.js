import consumer from "./consumer"

document.addEventListener('DOMContentLoaded', ()=>{
  const room_element = document.getElementById("room-id");
  const room_id = Number(room_element.getAttribute('data-room-id'));
  const messageBox = document.getElementById('messages');
  messageBox.scrollTop = messageBox.scrollHeight;
  consumer.subscriptions.create({channel:"RoomChannel",room_id: room_id}, {
    connected() {
      // Called when the subscription is ready for use on the server
      console.log('Connecting...'+room_id);
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      // Called when there's incoming data on the websocket for this channel
      // console.log('我接到資料啦')
      console.log(data)

      const user_element = document.getElementById("user-id");
      const user_id = Number(user_element.getAttribute('data-user-id'));

      let html;

      if( user_id === data.message.user_id){
        html = data.mine;
      }else{
        html = data.theirs;
      }

      const messageContainer = document.getElementById('messages')
      messageContainer.innerHTML = messageContainer.innerHTML + html

      let inputField = document.getElementById('message_content')
      inputField.value = '';
    }
  });
  
})



