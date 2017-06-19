<?php
$xlsPath = './test1.xls'; //指定要读取的exls路径 
//$type = 'Excel2007'; //设置要解析的Excel类型 Excel5(2003或以下版本)或Excel2007
$type = 'Excel5';
//引入excel类
include 'Classes/PHPExcel.php';			
include 'Classes/PHPExcel/IOFactory.php';
$xlsReader = PHPExcel_IOFactory::createReader($type);  
$xlsReader->setReadDataOnly(true);
$xlsReader->setLoadSheetsOnly(true);
$Sheets = $xlsReader->load($xlsPath);
header("content-type:text/html;charset=utf-8");
//开始读取
$Sheet = $Sheets->getSheet(0)->toArray(); //读取第一个工作表(注意编号从0开始) 如果读取多个可以做一个循环0,1,2,3....
//得到二维数组,每个小数组是excel表格内容的一行 里面包含此行的每列的数据  
echo '<pre>';
print_r($Sheet);
?>