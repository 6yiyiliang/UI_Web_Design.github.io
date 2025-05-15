// 获取动态时间
let m = setInterval(function() {
    // 创建一个新的 Date 对象，表示当前时间
    const date = new Date();
    // 获取当前年份
    var year = date.getFullYear();
    // 获取当前月份，由于月份是从 0 开始计数的，所以要加上 1
    const month = date.getMonth() + 1;
    // 获取当前日期，小时数，分钟数以及秒数
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // 选择页面中所有类名为 'news_date' 的元素
    const time = document.querySelectorAll('.news_date');
    // 定义一个函数，用于给数值小于 10 的数字前面添加 0，使其格式为两位数
    function addZero(obj) {
        if (obj < 10) {
            return "0" + obj;
        } else return obj;
    }
    // 遍历所有选中的元素
    for (let i = 0; i < time.length; i++) {
        // 更新元素的内容为当前时间
        time[i].innerHTML = year + `-${addZero(month)}-${addZero(day)}-${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} `;
    }
}, 1000);

//课本410页
//当前图片序号
var index=0;
$ (document).ready(function() {
    setInterval("next()",3000);
});
//切换下一张
function next(){
  //当前图片淡出
  $ ("#slider li:eq(" + index + ")").fadeOut(1500);
  //判断当前图片序号是否为最后一张
  if(index == 3)
    //如果是最后一张，序号跳转到第一张
    index = 0;
  else
  //否则图片序号自增1
    index++;
  //新图片淡入
  $("#slider li:eq(" + index + ")").fadeIn(1500);
} 

//切换上一张图片
function last(){
    //当前图片淡出
    $("#slider li:eq(" + index +")").fadeOut(1500);
    //判断当前图片序号是否为第一张
    if(index == 0)
    //如果是第一张，序号跳转到最后
    index ==2;
    else
    //否则图片序号自减1
    index--;
    //新图片淡入
    $("#slider li:eq(" + index + ")").fadeIn(1500);
}