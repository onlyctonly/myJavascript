document.querySelectorAll("a[href='/informationcentre/informationcentrelist_listView.do']")[0].click();
setTimeout(function(){ document.querySelectorAll("a[href='informationcentre/informationcentre_addView.do']")[0].click(); }, 5000);
setTimeout(function(){
document.querySelectorAll('#model_quoteFrom')[1].value='中希时报/希中网';
document.querySelectorAll('#model_quoteUrl')[0].value='https://www.cgw.gr/news.htm';
document.querySelectorAll("input[value='现在']")[0].click();
document.querySelectorAll("input[name='keywordsList']")[0].value='希腊';
document.querySelectorAll("span#select2-infoTypeId-container")[0].innerHTML='希腊';
document.querySelectorAll("span#select2-model_topHrttId-container")[0].innerHTML='希腊--zxsb中希时报';
  
}, 10000);
