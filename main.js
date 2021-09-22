const chatsList = [
  {
    dp: 'chat-images/pandat.jpg',
    name: 'Shivam Sharma',
    message: 'Just setting up my Whatsapp',
    time: 'Now'
  },
  {
    dp: 'chat-images/naveen.jpg',
    name: 'Naveen Das',
    message: 'I noticed you copy my style',
    time: 'Yesterday'
  },
  {
    dp: 'chat-images/ian.jpg',
    name: 'Ian Somerhalder',
    message: 'Hello Brother!',
    time: 'Yesterday'
  },
  {
    dp: 'chat-images/rdj.jpg',
    name: 'Robert Downey Jr.',
    message: 'I am Iron Man',
    time: 'Yesterday'
  },
  {
    dp: 'chat-images/joseph.jpg',
    name: 'Joseph Morgan',
    message: 'You heard of me... Fantastic',
    time: 'Yesterday'
  },
  {
    dp: 'chat-images/tom.jpg',
    name: 'Tom Ellis',
    message: 'I am a devil of my word!',
    time: 'Yesterday'
  },
  {
    dp: 'chat-images/chris.jpg',
    name: 'Chris Hemsworth',
    message: 'I am thor god of Thunder',
    time: 'Yesterday'
  },
  {
    dp: 'chat-images/paul.jpg',
    name: 'Paul Wesley',
    message: 'I am freak\'in hungry',
    time: 'Yesterday'
  },
  {
    dp: 'chat-images/marvel.jpg',
    name: 'Marvel Studios',
    message: 'Spider man - No way home trailer released',
    time: 'Yesterday'
  }
];

const statusList = [
  {
    dp: 'chat-images/pandat.jpg',
    name: 'Shivam Sharma',
    time: 'Now',
    video: 'status/user.mp4'
  },
  {
    dp: 'chat-images/naveen.jpg',
    name: 'Naveen Das',
    time: 'Yesterday',
    video: 'status/naveen.mp4'
  },
  {
    dp: 'chat-images/ian.jpg',
    name: 'Ian Somerhalder',
    time: 'Yesterday',
    video: 'status/ian.mp4'
  },
  {
    dp: 'chat-images/rdj.jpg',
    name: 'Robert Downey Jr.',
    time: 'Yesterday',
    video: 'status/rdj.mp4'
  },
  {
    dp: 'chat-images/joseph.jpg',
    name: 'Joseph Morgan',
    time: 'Yesterday',
    video: 'status/joseph.mp4'
  },
  {
    dp: 'chat-images/tom.jpg',
    name: 'Tom Ellis',
    time: 'Yesterday',
    video: 'status/tom.mp4'
  },
  {
    dp: 'chat-images/chris.jpg',
    name: 'Chris Hemsworth',
    time: 'Yesterday',
    video: 'status/chris.mp4'
  },
  {
    dp: 'chat-images/paul.jpg',
    name: 'Paul Wesley',
    time: 'Yesterday',
    video: 'status/paul.mp4'
  },
  {
    dp: 'chat-images/marvel.jpg',
    name: 'Marvel Studios',
    time: 'Yesterday',
    video: 'status/marvel.mp4'
  }
];

// for nav bar section 
let article = document.getElementsByTagName('article')[0];
let navItems = document.getElementsByClassName('navItems');

for (let i = 0; i < 4; i++) {
  navItems[i].addEventListener('click', () => {
    let Width = window.innerWidth;
    article.scrollTo(Width * i, 0);
    for (let i = 0; i < 4; i++) {
      navItems[i].style.color = 'rgba(255, 255, 255, 0.644)';
      navItems[i].style.borderBottom = '0px';
    }
    navItems[i].style.color = '#00af9c';
    navItems[i].style.borderBottom = '3px solid currentColor';
  });
}

// function to get the current time 
function currentTime() {
  let time = new Date();
  return `${time.getHours()}:${time.getMinutes()}`;
}

//chats section goes here 

// to create chats templates 
function ChatsCreate(value) {
  let chatsContainer = document.getElementById('chats-container');
  let chat = document.createElement('div');
  chat.classList.add('chat');
  chat.innerHTML = `
                      <div class="chat-image">
                          <img class="DP" src="${chatsList[value].dp}">
                      </div>
                      <div class="chat-text">
                          <div class="chat-name text-wrap">${chatsList[value].name}</div>
                          <div class="chat-message text-wrap">${chatsList[value].message}</div>
                      </div>
                      <div class="chat-time">${chatsList[value].time}</div>`;
  chatsContainer.appendChild(chat);
}

// onclick show the chats with contact 
let chatingContainer = document.getElementById('chating-container');
let chatText = document.getElementsByClassName('chat-text');
let chatImagesViewerBox = document.getElementById('chat-image-viewer-box');
let chatImageViewer = document.getElementById('chat-image-viewer');
let chatLength = chatsList.length;
let chatImages = document.getElementsByClassName('chat-image');
let fullDisplayImage = document.getElementById('full-display-image');
let fullDisplayClose = document.getElementById('full-display-close');
let DP = document.getElementsByClassName('DP');
let smallImage = document.getElementById('small-image');
let chatName = document.getElementById('chat-name');
let fullSizeImage = document.getElementById('full-size-image');
let fullDisplayName = document.getElementById('full-display-name');
let chatingClose = document.getElementById('chating-close');
let chatingImage = document.getElementById('chating-image');
let chatingName = document.getElementById('chating-name');
let sender = document.getElementsByClassName('sender');
let messageContainer = document.getElementById('messages-container');
let send = document.getElementById('send');
let message = document.getElementById('message');

// to close the chat section 
chatingClose.addEventListener('click', () => {
  chatingContainer.style.left = '100%';
});

// to make the message send function goes here
send.addEventListener('click',()=>{
  let messageDiv = document.createElement('div');
  messageDiv.classList.add('reply');
  messageDiv.innerHTML = `${message.value} <sub>${currentTime()}</sub>`;
  messageContainer.appendChild(messageDiv);
  message.value = '';
})

// open image section starts here 

// to close the mini image opened 
chatImageViewer.addEventListener('click', () => {
  chatImageViewer.style.display = 'none';
  chatImagesViewerBox.style.display = 'none';
});

// to open full display images 
smallImage.addEventListener('click', () => {
  fullSizeImage.src = smallImage.src;
  fullDisplayName.innerHTML = chatName.innerHTML;
  fullDisplayImage.style.display = 'flex';
  chatImageViewer.style.display = 'none';
  chatImagesViewerBox.style.display = 'none';
});

// to close the full image opened 
fullDisplayClose.addEventListener('click', () => {
  fullDisplayImage.style.display = 'none';
});

// status section goes here 
let statusDisplayContainer = document.getElementById('status-display-container');
let statusContainerClose = document.getElementById('status-container-close');
let status = document.getElementsByClassName('status');
let statusLength = status.length;
let statusContainer = document.getElementById('status-container');
let statusListLength = statusList.length;
let statusVideo = document.getElementById('status-video');
let statusContainerImage = document.getElementById('status-container-image');
let statusContainerName = document.getElementById('status-container-name');
let statusContainerTime = document.getElementById('status-container-time');
let fill = document.getElementById('fill');
let statusImageBorder = document.getElementsByClassName('status-image-border');

// to hide the display container on click
statusContainerClose.addEventListener('click', () => {
  statusDisplayContainer.style.top = '100%';
  statusDisplayContainer.style.opacity = '0';
  statusVideo.pause();
});

// to create all the chats status 
function statusCreate(value) {
  let statusChild = document.createElement('div');
  statusChild.classList.add('status');

  statusChild.innerHTML = `
              <div class="status-image">
                  <img class="status-image-border" src="${statusList[value].dp}">
              </div>
              <div class="status-text">
                  <div class="status-name text-wrap">${statusList[value].name}</div>
                  <div class="status-time">${statusList[value].time}</div>
              </div>
                          `;
  statusContainer.appendChild(statusChild);
}

// calling the function create status 
for (let i = 0; i < statusListLength; i++) {
  statusCreate(i);
  if (i == 0) {
    let statusChild = document.createElement('div');
    statusChild.id = 'recent-updates';
  
    statusChild.innerHTML = `Recent updates`;
    statusContainer.appendChild(statusChild);
  }
}

// function to close the status automatically 
statusVideo.addEventListener('ended',()=>{
  statusDisplayContainer.style.top = '100%';
  statusDisplayContainer.style.opacity = '0';
})

// to display the status conatianer on click 
for (let i = 0; i < statusListLength; i++) {
  status[i].addEventListener('click', () => {
    statusDisplayContainer.style.top = '0';
    statusDisplayContainer.style.opacity = '1';
    statusVideo.src = statusList[i].video;
    statusVideo.play();
    statusContainerImage.src = statusList[i].dp;
    statusContainerName.innerHTML = statusList[i].name;
    statusContainerTime.innerHTML = statusList[i].time;
    statusImageBorder[i].style.border = '2px solid #414446a1';
  });
}

setInterval(() => {
  fill.style.width = `${statusVideo.currentTime / statusVideo.duration * 100}%`;
}, 10);












// window onload function calls here 
window.addEventListener('load', () => {
  let Width = window.innerWidth;
  article.scrollTo(Width * 1, 0);

  for (let i = 0; i < chatLength; i++) {
    ChatsCreate(i);
  }
  // to open images 

  for (let i = 0; i < chatLength; i++) {
    chatImages[i].addEventListener('click', () => {
      chatImageViewer.style.display = 'block';
      chatImagesViewerBox.style.display = 'block';
      smallImage.src = chatsList[i].dp;
      chatName.innerHTML = chatsList[i].name;
    })
  }

  // to open chat container 
  for (let i = 0; i < chatLength; i++) {
    chatText[i].addEventListener('click', () => {
      chatingContainer.style.left = '0';
      chatingImage.src = chatsList[i].dp;
      chatingName.innerHTML = chatsList[i].name;
      sender[0].innerHTML = chatsList[i].message + ' <sub>8:09PM</sub>';
    });
  }

  // to remove the preloader once the page is loaded 
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});