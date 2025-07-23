const messagesFromFriends = [
{ text: "Happy birthday phove, we've been together since g7 kuyaw hangtod pa gyd karon puol na kay kag nawng. Thank you for always being ready to listen to my rants and problems, I hope you'll have a great day. Sigeg binogo sa love life nimo oy", image: "images/friend1.jpg" },
{ text: "Hello Pobekateeee! 💗 HAPPY HAPPY BIRTHDAY! 🥳🎉  Grabe ato'ng bond sa?, from those awkward early high school days to our Grade 9 and 10 adventures until now shs highschool same ra gihapon ta og circle, same vibes sometimes and same abnoy levels . Daghan na kaayog memories nga murag hapit na memory gap tungod sa sigeg katawa! Thank you for everything. You deserve all the love and blessings sa kalibutan. 🫶 Laban ra jud ta always💪. More birthdays to come, more laughters, and more Us moments. Amping permi, and may God always guide you in everything you do. Mwah iloveyouu pobeee 💕😙🎂", image: "images/friend2.jpg" },
{ text: "Hi pobe happy birthday! ayaw na pag inoa kay gamay nalang kuwang ma patiran na tika charez, btaw enjoy your day ug unta ug badlongon ka namo ni althea maminaw naka kay kahibaw na biya ka gamay rakog pasensya basin malamparo tikas walay oras. Enjoy your day pobelat🫰🏻", image: "images/friend4.jpg" },
{ text: "Happy Birthday, Phove! Maraming salamat sa lahat ng bagay na ginawa mo para sa amin. Nawa'y magbago na ang iyong typings para hindi kana maging punching bag ni Shanley and Althea (mga bad beach). Ikaw rajud ang akong protector sa mga kasamaan sa mundo. Wish you all the best in life! More birthdays to come. Love you! ✌️", image: "images/friend5.jpg" },
{ text: "HAPPIEST BIRTHDAY, BABII!!!!!!! 🥳 I truly thank God for your existence po, and I am so grateful for you just being you. With you, I can always act childish, sabaan, oa or mag unsa pako diha. kaya I always admire how you made things feel so light and comfortable. Thank you po for always being my shield against the bad vibes around us. You are so firm and protective and I appreciate that more than you know po. And I will always be your  supporter, admirer, and ang taga-tili sa story sa love layf nimo HAHAHAHA. And I do sincerely hope na in Gods perfect timing, you will meet the one you have been praying for. 😌 Enjoy every bit of your special day! ☺️ May God continue to bless you with more birthdays,. I love you lotsss!!! 😚 HAPPY HAPPY BIRTHDAY AGAIN! 🎂💖", image: "images/friend7.jpg" },
{ text: "jjmon final boss", image: "images/friend6.jpg" }
];

function enterSite() {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('main').style.display = 'flex';
}

function showMessages(source) {
  document.getElementById('main').style.display = 'none';
  document.getElementById('messagesSection').style.display = 'block';

  const messagesDiv = document.getElementById('messages');
  const sectionTitle = document.getElementById('sectionTitle');
  messagesDiv.innerHTML = '';

  if (source === 'bayang') {
    sectionTitle.textContent = 'Message from Bayang';
    messagesDiv.innerHTML = '<p class="message">ay pag expect oy wa ko to gi approach para ani</p>';
  } else {
    sectionTitle.textContent = 'Messages from Friends';
   messagesFromFriends.forEach(msg => {
  const messageEl = document.createElement('div');
  messageEl.className = 'message';

  const textEl = document.createElement('div');
  textEl.className = 'message-text';
  textEl.innerText = msg.text;
  messageEl.appendChild(textEl);

  if (msg.image) {
    const imgEl = document.createElement('img');
    imgEl.src = msg.image;
    imgEl.className = 'message-image';
    messageEl.appendChild(imgEl);
  }

  messagesDiv.appendChild(messageEl);
});
}
}

function goBack() {
  document.getElementById('messagesSection').style.display = 'none';
  document.getElementById('main').style.display = 'flex';
}
