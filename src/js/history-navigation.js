export default {
  init,
  goToPage
};

function init() {
  listenForPopstates();
}

function listenForPopstates() {
  window.addEventListener('popstate', (e) => {
    let historyState = _.get(e, 'state') || {page: null};
    let url = historyState.page || 'home';
    goToPage(url);
  });
}

function goToPage(url) {
  $.ajax({
    url: url,
    dataType: 'html',
    success: data => { $('#main-content').html(data) }
  });
}