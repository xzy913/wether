// 获取input框中的数据
let city = document.getElementById("input");
// console.log(city);
// 获取定位框
let position = document.getElementById("position");
// 获取今日天气
let temperature = document.getElementsByClassName("temperature")[0];
let cloud = document.getElementsByClassName("cloud")[0];
let wind = document.getElementsByClassName("wind")[0];
let tip = document.getElementsByClassName("tip")[0];
// 获取生活指数
let a = document.getElementsByClassName("a")[0];
let A = document.getElementsByClassName("A")[0];
let b = document.getElementsByClassName("b")[0];
let B = document.getElementsByClassName("B")[0];
let c = document.getElementsByClassName("c")[0];
let C = document.getElementsByClassName("C")[0];
let d = document.getElementsByClassName("d")[0];
let D = document.getElementsByClassName("D")[0];
// 获取未来天气
let rqa = document.getElementsByClassName("rqa");
let tqa = document.getElementsByClassName("tqa");
let wda = document.getElementsByClassName("wda");
// city.onclick= function btnx(){
function btn() {
  let content = city.value;
  // console.log(content);
  const ajax = (method, url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            let res = JSON.parse(xhr.response);
            resolve(res);
          } else {
            reject("请求失败");
          }
        }
      };
    });
  };
  ajax(
    "get",
    "https://tianqiapi.com/api?version=v1&appid=85214918&appsecret=m5rMoSIV &city=" +
      content
  ).then(
    (res) => {
      const { result } = res;
      // console.log(res);
      let array = res.data;
      // console.log(array[0]);
      position.innerHTML = res.city;
      // 今日天气
      temperature.innerHTML = array[0].tem;
      cloud.innerHTML = array[0].wea;
      wind.innerHTML = array[0].win[0];
      tip.innerHTML = array[0].air_tips;
      // 生活指数
      let index = array[0].index;
      console.log(array[0].index);
      // 1.紫外线指数
      a.innerHTML = index[0].title + ":" + index[0].level;
      A.innerHTML = index[0].desc;
      // 2.洗车指数
      b.innerHTML = index[4].title + ":" + index[4].level;
      B.innerHTML = index[4].desc;
      // 3.穿衣指数
      c.innerHTML = index[3].title + ":" + index[3].level;
      C.innerHTML = index[3].desc;
      // 4.减肥指数
      d.innerHTML = index[1].title + ":" + index[1].level;
      D.innerHTML = index[1].desc;
      // 未来天气
      for (let i = 0; i < 7; i++) {
        rqa[i].innerHTML = array[i].day;
      }
      for (let i = 0; i < 7; i++) {
        tqa[i].innerHTML = array[i].wea;
      }
      for (let i = 0; i < 7; i++) {
        wda[i].innerHTML = array[i].tem1 + "/" + array[i].tem2;
      }
      sy.style.display = "none";
      second.style.display = "block";
      fourth.style.display = "none";
      third.style.display = "none";

      ball.style.display = "block";
      ball1.style.display = "none";
      cloth.style.display = "none";
      cloth1.style.display = "block";
      paper1.style.display = "none";
      number.style.color = "black";
      today.style.color = "#F4EA2A";
      future.style.color = "black";

      // let his = document.getElementById("history");
      // let history_ul = document.getElementById("history_ul");
      // let history_li = document.createElement("li");
      // var del = document.getElementsByClassName("del");
      // // console.log(del.innerHTML);
      //   // let span = document.createElement("span");
      // if (city.value !== undefined) {
      //   his.style.display = "block";
      //   // var history_ul = document.getElementById("history_ul")
      //   // let history_li = document.createElement("li");
      //   // let span = document.createElement("span");
      //   history_ul.appendChild(history_li);
      //   // history_ul.appendChild(span);
      //   let del = `<span class="del">删除</span>`;
      //   history_li.innerHTML = city.value + del;
      //   history_li.id = history_li;
      //   // span.innerHTML = "删除";
      //   // span.className = "del";
      //   // console.log(span);
      //   // span.onclick = function btni() {
      //   //   history_ul.removeChild(history_li);
      //   //   span.innerHTML = "";
      //   // };
      //   let dele = document.getElementsByClassName("del");
      // console.log(dele.innerHTML);
      // del.onclick = function btni() {
      //   history_ul.removeChild(history_li);
      //   city.value="删除"
      //   // span.innerHTML = "";
      // };
      //   city.onclick = function btnh() {
      //     history_ul.style.display = "block";
      //     // span.style.display = "block";
      //   };
      //   // console.log(e);
      //   history_ul.onclick = function btnj(){
      //     city.value=history_li.innerHTML;
      //   }
      //   history_ul.addEventListener("click", function (e) {
      //     city.value = e.target;
      //     console.log(e.target.firstChild.data);
      //   });
      // }
      // // let del = document.getElementsByClassName("del");
      // // console.log(del);
      // // del.onclick = function btni() {
      // //   history_ul.removeChild(history_li);
      // //   span.innerHTML = "";
      // // };
      // var his = document.getElementById("history");
      // var history_ul = document.getElementById("history_ul");
      // var history_li = document.createElement("div");
      // var del = document.createElement("button");
      // history_ul.appendChild(history_li);
      // history_li.appendChild(del);
      // if (city.value !== undefined) {
      //   his.style.display = "block";
      //   city.onclick = function btni() {
      //     history_li.innerHTML = city.value;
      //     history_ul.style.display = "block";
      //     // console.log(del);
      //     // del.onclick = function btnj() {
      //     //   history_ul.removeChild(history_li);
      //     //   history_ul.style.display="none"
      //     //   var del = document.createElement("button");
      //     // //   // var history_li = document.createElement("div");
      //     //   history_li.appendChild(del);
      //     //   // history_li.appendChild(del);
      //     // };
      //     // history_ul.addEventListener("click",function(e){
      //     //   city.value = e.target
      //     //   console.log(e.target);
      //     // })
      //   };
      // //   del.onclick = function btnj() {
      // //     history_ul.removeChild(history_li);
      // //   };
      // }
    },
    (err) => {
      console.log(err);
    }
  );
}
// btn()
// }
let ball1 = document.getElementById("ball1");
let ball = document.getElementById("ball");
let cloth1 = document.getElementById("cloth1");
let cloth = document.getElementById("cloth");
let paper1 = document.getElementById("paper1");
let paper = document.getElementById("paper");
// 获取字
let number = document.getElementById("number");
let today = document.getElementById("today");
let future = document.getElementById("future");

let second = document.getElementById("second");
let sy = document.getElementById("sy");
let third = document.getElementById("life");
let fourth = document.getElementById("fourth");
console.log(second);

ball.onclick = function btna() {
  sy.style.display = "none";
  third.style.display = "block";
  fourth.style.display = "none";
  second.style.display = "none";
  ball.style.display = "none";
  cloth.style.display = "block";
  ball1.style.display = "block";
  cloth1.style.display = "none";
  paper1.style.display = "none";
  paper.style.display = "block";
  number.style.color = "#F4EA2A";
  today.style.color = "black";
  future.style.color = "black";
};
cloth.onclick = function btnb() {
  sy.style.display = "none";
  second.style.display = "block";
  fourth.style.display = "none";
  third.style.display = "none";
  cloth.style.display = "none";
  ball.style.display = "block";
  ball1.style.display = "none";
  cloth1.style.display = "block";
  paper1.style.display = "none";
  paper.style.display = "block";
  number.style.color = "black";
  today.style.color = "#F4EA2A";
  future.style.color = "black";
};
paper.onclick = function btnc() {
  sy.style.display = "none";
  third.style.display = "none";
  second.style.display = "none";
  fourth.style.display = "block";
  paper.style.display = "none";
  ball.style.display = "block";
  ball1.style.display = "none";
  cloth1.style.display = "none";
  paper1.style.display = "block";
  cloth.style.display = "block";
  number.style.color = "black";
  today.style.color = "black";
  future.style.color = "#F4EA2A";
};
// 获取返回符号
let xy = document.getElementById("xy");
xy.onclick = function btnd() {
  sy.style.display = "block";
  third.style.display = "none";
  second.style.display = "none";
  fourth.style.display = "none";
  paper.style.display = "block";
  ball.style.display = "block";
  ball1.style.display = "none";
  cloth1.style.display = "none";
  paper1.style.display = "none";
  cloth.style.display = "block";
  number.style.color = "black";
  today.style.color = "black";
  future.style.color = "black";
  history_ul.style.display = "block";
  // city.value="";

  
  }
  
// };
// 获取历史记录
// let history_li = document.getElementById("history_li");
// let del = document.getElementsByClassName("del");
// console.log(del);
// let dele = del.innerHTML;
// // console.log(dele);
// city.onclick = function btnh() {
//   history_ul.style.display = "block";
//   // span.style.display = "block";
// };
// // console.log(e);
// history_ul.addEventListener("click", function (e) {
//   city.value = e.target.firstChild.data;
//   console.log(e.target.firstChild.data);
// });
// del.onclick = function btni() {
//     history_ul.removeChild(history_li);
//     span.innerHTML = "";
//   };
// let his = document.getElementById("history");
// let history_ul = document.getElementById("history_ul");
// // let history_li = document.createElement("li");
// // let del = document.createElement("button");
// // history_ul.appendChild(history_li);
// // history_li.appendChild(del);
// if (city.value !== undefined) {
//   let history_li = document.createElement("li");
// let del = document.createElement("button");
//   history_ul.appendChild(history_li);
// history_li.appendChild(del);
//     his.style.display = "block";
//     city.onclick = function btni(){
//       history_li.innerHTML=city.value;
//       history_ul.style.display="block";
//     }
// }
// var his = document.getElementById("history");
// var history_ul = document.getElementById("history_ul");
// var history_li = document.createElement("div");
// var del = document.createElement("button");
// history_ul.appendChild(history_li);
// history_li.appendChild(del);


// city.onclick= function btnx(){
//   var his = document.getElementById("history");
// var history_ul = document.getElementById("history_ul");
// var history_li = document.createElement("div");
// var del = document.createElement("button");
// history_ul.appendChild(history_li);
// history_li.appendChild(del);

// if (city.value !== undefined) {
//   his.style.display = "block";
//   // city.onclick = function btni() {
//     // history_li.innerHTML = city.value;
//     // history_ul.style.display = "block";
//     // console.log(del);
//     // del.onclick = function btnj() {
//     //   history_ul.removeChild(history_li);
//     //   history_ul.style.display="none"
//     //   var del = document.createElement("button");
//     // //   // var history_li = document.createElement("div");
//     //   history_li.appendChild(del);
//     //   // history_li.appendChild(del);
//     // };
//     // history_ul.addEventListener("click",function(e){
//     //   city.value = e.target
//     //   console.log(e.target);
//     // })
//     // btn()
//   };
//   // for (i = 0;i<history_li.clientHeight;i++){
//   // del.onclick = function btnj() {
//   //   history_ul.removeChild(history_li[i-1]);
//   // };
// // }

// history_li.innerHTML = city.value;
//     history_ul.style.display = "block";

//     history_ul.addEventListener("click", function (e) {
//         city.value = e.target.firstChild.data;
//         console.log(e.target.firstChild.data);
//       });
// }

// 历史记录
let his = document.getElementById("history");
let history_ul = document.getElementById("history_ul");
city.onclick = function btny(){
  let history_li=document.createElement("div")
  let button = document.createElement("button")
  history_ul.appendChild(history_li)
  history_li.appendChild(button)
  if(city.value!==undefined){
    history_ul.style.display="block"
  his.style,display="block"
  history_li.innerHTML=city.value
  }
}