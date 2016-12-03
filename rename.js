const fs = require('fs');
var moment = require('moment');
var tomorrow = moment().add(1, "days");
var tomorrowDate = tomorrow.date();
var tomorrowMonth = tomorrow.month()+1;

tomorrowDate = tomorrowDate.toString();
tomorrowMonth = tomorrowMonth.toString();
if (tomorrowDate.length == 1) {
    tomorrowDate = `0${tomorrowDate}`;
    //console.log(tomorrowDate);
}

if (tomorrowMonth.length == 1) {
    tomorrowMonth = `0${tomorrowMonth}`;
    //console.log(tomorrowMonth);
}



fs.readdir('./pdf', (err,files) => {
    files.forEach((file)=>{
	if (file.length == 12) {
	    fs.rename(`./pdf/${file}`, `./pdf/`+ file.slice(0,2) + file.slice(8), (err) => {if(err)console.log(err);});
	    //console.log(file.slice(0,2)+file.slice(8));
	}

    })
    console.log('partial name -color checked');
});

fs.readdir('./pdf', (err,files) => {
    files.forEach((file)=>{
	//console.log(file);
	switch (file) {
	case "01.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_001_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "02.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_002_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "03.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_003_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "04.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_004_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "05.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_005_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "06.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_006_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "07.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_007_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "08.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_008_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "09.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_009_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "10.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_010_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "11.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_011_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "12.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_012_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "13.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_013_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "14.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_014_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "15.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_015_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "16.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_016_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "17.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_017_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "18.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_018_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "19.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_019_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "20.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_020_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "21.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_021_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "22.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_022_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "23.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_023_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "24.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_024_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "25.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_025_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "26.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_026_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "27.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_027_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "28.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_028_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "29.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_029_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "30.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_030_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "31.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_031_K.pdf`, (err) => {if(err)console.log(err);});
	    break;
	case "32.pdf":
	    fs.rename(`./pdf/${file}`, `./pdf/CGT_${tomorrowDate}${tomorrowMonth}_032_CMYK.pdf`, (err) => {if(err)console.log(err);});
	    break;
	}
    })
    console.log('rename process is completed');
});


//fs.readdir('./pdf', (err,files) => {files.forEach((file)=>{console.log(file)})});
//var files = fs.readdir('./pdf', (err, files)=> {
//    fs.rename(`./pdf/${files[0]}`, './pdf/02.pdf', (err) => {if(err)console.log(err);});
//});


// 2016/11/26  16:23        10,100,293 CGT_2711_001_CMYK.pdf
// 2016/11/26  16:59         4,414,226 CGT_2711_002_K.pdf
// 2016/11/26  17:17         3,042,959 CGT_2711_003_K.pdf
// 2016/11/26  16:00         3,833,862 CGT_2711_004_CMYK.pdf
// 2016/11/26  16:00         3,920,716 CGT_2711_005_CMYK.pdf
// 2016/11/26  17:18         5,831,341 CGT_2711_006_K.pdf
// 2016/11/26  17:18         4,747,456 CGT_2711_007_K.pdf
// 2016/11/26  17:19         5,402,917 CGT_2711_008_CMYK.pdf
// 2016/11/26  17:19         5,085,040 CGT_2711_009_CMYK.pdf
// 2016/11/26  14:55         1,126,264 CGT_2711_010_K.pdf
// 2016/11/26  14:55           903,429 CGT_2711_011_K.pdf
// 2016/11/26  14:55         1,972,285 CGT_2711_012_CMYK.pdf
// 2016/11/26  16:34         5,032,570 CGT_2711_013_CMYK.pdf
// 2016/11/26  16:35         4,323,848 CGT_2711_014_K.pdf
// 2016/11/26  16:36         3,237,796 CGT_2711_015_K.pdf
// 2016/11/26  16:36         3,821,061 CGT_2711_016_CMYK.pdf
// 2016/11/26  16:38         4,667,037 CGT_2711_017_CMYK.pdf
// 2016/11/26  16:52         6,343,985 CGT_2711_018_K.pdf
// 2016/11/26  16:40         5,138,461 CGT_2711_019_K.pdf
// 2016/11/26  16:42         4,141,892 CGT_2711_020_CMYK.pdf
// 2016/11/25  16:09         2,904,508 CGT_2711_021_CMYK.pdf
// 2016/11/25  16:26         4,727,485 CGT_2711_022_K.pdf
// 2016/11/26  14:55         1,203,213 CGT_2711_023_K.pdf
// 2016/11/26  14:56         1,616,890 CGT_2711_024_CMYK.pdf
// 2016/11/26  14:56         1,524,898 CGT_2711_025_CMYK.pdf
// 2016/11/26  14:56         1,149,829 CGT_2711_026_K.pdf
// 2016/11/26  14:56         1,231,711 CGT_2711_027_K.pdf
// 2016/11/26  14:56         1,289,304 CGT_2711_028_CMYK.pdf
// 2016/11/25  16:05         4,822,140 CGT_2711_029_CMYK.pdf
// 2016/11/26  14:56           636,377 CGT_2711_030_K.pdf
// 2016/11/26  17:22           967,821 CGT_2711_031_K.pdf
// 2016/11/26  14:56         1,476,357 CGT_2711_032_CMYK.pdf
