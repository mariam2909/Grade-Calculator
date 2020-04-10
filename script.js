function calculateGrade(){
  var ParticipationPercent=parseInt
  (document.getElementById("ParticipationPercent").innerHTML)

  var ParticipationGrade=parseFloat
  (document.getElementById("ParticipationGrade").value)

  var currentGrade=ParticipationPercent *
  ParticipationGrade/100
  console.log(currentGrade)

  document.getElementById("currentGrade").innerHTML=currentGrade
}
