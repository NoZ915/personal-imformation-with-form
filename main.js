clickToStart = function () {
  var name = $("#name").val()
  var sex = $('input[name="sex"]:checked').val()
  var age = $("#age").val()
  var birth = $("#birth").val()
  var zodiacSigns = $("#zodiac-signs :selected").text()
  var email = $("#email").val()
  var phoneNumber = $("#phone-number").val()
  var address = $("#address").val()
  var jobTitle = $("#job-title").val()

  var selfIntroduction = document.getElementById("self-introduction")
  selfIntroduction.innerHTML = `<p>嗨！大家好～我是` + name + `，我是個` + sex + `。職業是` + jobTitle + `，出生的日期是在` + birth + `，所以今年是` + age + `歲，而星座則是` + zodiacSigns + `，這裡順便附上我的電子郵件：` + email + `，有任何問題都能跟我聯絡！對了！手機號碼也留給你好了` + phoneNumber + `，我家地址也給你，如果郵件、手機都找不到我的話，就來` + address + `找我吧！</p>`
}