<?php
namespace Admin\Controller;
use Think\Controller;
use Common\Controller\AdminBaseController;
class DaochuController extends AdminBaseController {
    public function querybusiness(){
        // echo "1";die;
        $typ=I('typ');
        $service = I('type');
        $this->daochu($typ,$service,null,null,null);
    }
    public function devman(){
        $typ=I('typ');
        $manu=I('manu');
        $manutype=I('manutype');
        $versionnum=I('versionnum');
        $patchnum=I('patchnum');
        $this->daochu($typ,$manu,$manutype,$versionnum,$patchnum);
    }
    public function ne(){
        $typ=I('typ');
        $type=I('type');
        $operator_id=I('operator_id');
        $this->daochu($typ,$type,$operator_id,null,null);
    }
	public function daochu($typ,$a,$b,$c,$d){
        require_once(THINK_PATH.'Library/Vendor/excelclass/Classes/PHPExcel.php');//引入PHP EXCEL类
        require_once(THINK_PATH.'Library/Vendor/excelclass/Classes/PHPExcel/IOFactory.php');//引入PHP EXCEL类
        
        $objExcel = new \PHPExcel();
        $objWriter = new \PHPExcel_Writer_Excel5($objExcel);
        $objPHPExcel = new \PHPExcel();
        $objActSheet = $objPHPExcel->getActiveSheet();   
        // echo  $service;die;
        //$typ=I('typ');
        if($typ==1){
	        // $service = I('type');
            $service = $a;
	        $condition['equipment.'.$service] = '1';
	        $data = M('equipment')->join('country ON equipment.country_id = country.location_id')
	                              ->join('operator ON equipment.operator_id=operator.id')
	                              ->where($condition)
	                              ->field('equipment.*,country.name_chs,operator.operator_name')
	                              ->select();
			$objPHPExcel->getActiveSheet()->setTitle('业务查询');
			header('Content-Disposition: attachment;filename="业务查询.xls"');
        }else if($typ=='devman'){
        	// $condition['equipment.os'] = I('manu');
         //    $condition['equipment.type'] = I('manutype');
         //    $condition['equipment.version_number'] = I('versionnum');
         //    $condition['equipment.patch_number'] = I('patchnum');
            $condition['equipment.os'] = $a;
            $condition['equipment.type'] = $b;
            $condition['equipment.version_number'] = $c;
            $condition['equipment.patch_number'] = $d;
            $data = M('equipment')->join('country ON equipment.country_id = country.location_id')
                                  ->where($condition)
                                  ->field('equipment.*,country.name_chs')
                                  ->select();
            //dump($data);die;
            $objPHPExcel->getActiveSheet()->setTitle('设备厂商');
            header('Content-Disposition: attachment;filename="设备厂商.xls"');
        }else if($typ=='ne'){
            // $where['equipment.type']=I('type');
            $where['equipment.type']=$a;
            $where['equipment.operator_id']=I('operator_id');
            $data=M('equipment')->join('country ON equipment.country_id = country.location_id')
                                ->where($where)
                                ->select();
            //dump($data);die;
            $objPHPExcel->getActiveSheet()->setTitle('网元');
            header('Content-Disposition: attachment;filename="网元.xls"');
        }
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('A1','国家名');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('B1','网元类型');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('C1','运营商');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('D1','信令点');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('E1','操作系统');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('F1','核心处理芯片厂商');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('G1','设备厂家');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('H1','模块型号');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('I1','版本号');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('J1','补丁号');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('K1','接口类型');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('L1','接口数');
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue('M1','网卡类型');
        // dump($data);die;
        foreach($data as $key => $value){
            $key+=2;
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('A'.$key,$value['name_chs']);
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('B'.$key,$value['type']);
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('C'.$key,$value['operator_name']);
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('D'.$key,'CN2017');
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('E'.$key,$value['os']);
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('F'.$key,$value['core_chip_manufacture']);
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('J'.$key,$value['os']);
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('H'.$key,'5');
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('I'.$key,$value['version_number']);
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('J'.$key,$value['patch_number']);
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('K'.$key,$value['interface_type']);
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('L'.$key,$value['interface_number']);
            $objPHPExcel->setActiveSheetIndex(0)->setCellValue('M'.$key,$value['nic_type']);
        }
        $objActSheet->getColumnDimension('A')->setWidth(8);
        $objActSheet->getColumnDimension('B')->setWidth(20);
        $objActSheet->getColumnDimension('C')->setWidth(40);
        $objActSheet->getColumnDimension('D')->setWidth(20);  
        $objActSheet->getColumnDimension('E')->setWidth(20);
        $objActSheet->getColumnDimension('F')->setWidth(20);
        // $objPHPExcel->getActiveSheet()->setTitle('业务查询');
        $objPHPExcel->setActiveSheetIndex(0);
        header('Content-Type: application/vnd.ms-excel');
        // header('Content-Disposition: attachment;filename="业务查询.xls"');
        header('Cache-Control: max-age=0');
        header('Cache-Control: max-age=1');
        header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
        header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
        header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
        header ('Pragma: public'); // HTTP/1.0
        $objWriter = \PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
        $objWriter->save('php://output');
        exit;
        // if($typ=='语音'){
        //     $where['voice']='1';
        // }
    }
}