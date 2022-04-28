
const btn=document.querySelector("#btn");
const data=document.querySelector("#age");
const text=document.querySelector("#show-age")
const details=document.querySelector("#show-details")
btn.addEventListener("click",(e)=>{
    const result=data.value;
    const day1=Date.parse(result)
    const now=Date.now();
    const total=now-day1;

    const minute=1000*60;
    const hours=minute*60;
    const days=hours*24;
    const years=days*365;
    const age=Math.round(total/years);
    text.innerHTML=`سن واقعی شما محاسبه شده:${age}`;

    const month=age*12;
    const day=age*365;
    const hours2=Math.round(total/hours)
    details.innerHTML=`month is:${month} and day is:${day} and hours is ${hours2}`
})