const commentForm = document.querySelector('form');
const commentTextarea = document.querySelector('#comment');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const comment = commentTextarea.value;
  if (comment.trim() !== '') {
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    commentTextarea.value = '';
    renderComments(comments);
  }
});

function renderComments(comments) {
  const commentsList = document.createElement('ul');
  commentsList.innerHTML = comments.map(comment => `<li>${comment}</li>`).join('');
  const commentsSection = document.querySelector('#comments');
  commentsSection.appendChild(commentsList);
}

const comments = JSON.parse(localStorage.getItem('comments') || '[]');
renderComments(comments);