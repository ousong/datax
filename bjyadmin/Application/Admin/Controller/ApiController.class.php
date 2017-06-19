<?php
namespace Admin\Controller;
use Think\Controller;
class ApiController extends Controller {
    public function GetCountryDataFromContinent(){
        $continent = I('continent');
        $condition['parent_id'] = '000000000';
        $condition['continent'] = $continent;
        $Continentfull = M('country')->where($condition)
                                     ->field('continent_full,count(continent_full) as count')
                                     ->group('continent_full')
                                     ->select();

        for ($i=0;$i<count($Continentfull);$i++){
            $condition['continent_full'] = $Continentfull[$i]['continent_full'];
            $country = M('country')->where($condition)->field('name_chs,lng,lat,jsondata')->select();
            $countrydata[$i]['continent_full'] = $Continentfull[$i]['continent_full'];
            $countrydata[$i]['count'] = $Continentfull[$i]['count'];
            $countrydata[$i]['data'] = $country;
        }
        // dump($countrydata);die;
        
        $array=array(
               'Continent'=>$continent,
               // 'Country_number'=>count($Continentfull),
               'list'=>$countrydata,
            );
        $list=json_encode($array,JSON_UNESCAPED_UNICODE);
        $this->ajaxReturn($list);die;
    }


    //******************************
    public function Getcontinent(){ //查询国家   Getcontinent1查询要打图钉的国家
      $continent = I('continent');
      $condition['parent_id'] = '000000000';
      if($continent==''){
        $condition['type'] = '1';
      }else{
        $condition['continent'] = $continent;
      }
      $Continentfull = M('country')->where($condition)->select();
      // dump($Continentfull);die;
      $list=json_encode($Continentfull,JSON_UNESCAPED_UNICODE);
      $this->ajaxReturn($list);die;
    }
    public function Getcontinent1(){
      $continent = I('continent');
      $condition['parent_id'] = '000000000';
      $condition['continent'] = $continent;
      $Continentfull = M('country')->where($condition)->select();
      // dump($Continentfull);die;
      $list=json_encode($Continentfull,JSON_UNESCAPED_UNICODE);
      $this->ajaxReturn($list);die;
    }
    public function Getoperator(){
      $where['country_id']=I('location_id');
      $data=M('operator')->where($where)->select();
      $list=json_encode($data,JSON_UNESCAPED_UNICODE);
      $this->ajaxReturn($list);die;
    }
    public function Getequipment(){
      $where['operator_id']=I('operator_id');
      $data=M('equipment')->where($data)->group('type')->order('id')->select();
      // dump($data);die;
      $list=json_encode($data,JSON_UNESCAPED_UNICODE);
      $this->ajaxReturn($list);die;
    }
    public function Getequipmentinfo(){
      $limit = I('limit');
      $page = I('page');
      $where['equipment.type']=I('type');
      $where['equipment.operator_id']=I('operator_id');
      $info=M('equipment')->join('country ON equipment.country_id = country.location_id')
                          ->where($where)
                          ->limit(($limit*$page-$limit),$limit)
                          ->select();

      $count=M('equipment')->join('country ON equipment.country_id = country.location_id')
            ->where($where)
            ->count();

      $data['info'] = $info;
      $data['count'] = $count;

      $list=json_encode($data,JSON_UNESCAPED_UNICODE);
      $this->ajaxReturn($list);die;
    }
    public function Getquery(){
        $condition['country.name_chs'] = I('country');
        $data = M('operator')->join('country ON operator.country_id = country.location_id')
                             ->where($condition)
                             ->field('country.name_chs,country.MCC,country.lng,country.lat,operator.*')
                             ->select();
        // dump($data);die;
        $list=json_encode($data,JSON_UNESCAPED_UNICODE);
        $this->ajaxReturn($list);die;
    }
    public function Getindex1(){
        $operator['country.lng']=I('lng');
        $operator['country.lat']=I('lat');
        //$country['country']=I('country');
        $data=M('country')->join('operator ON country.location_id = operator.country_id')
                          ->where($operator)
                          ->field('country.name_chs,operator.*')
                          ->select();
        // dump($data);die;
        $list=json_encode($data,JSON_UNESCAPED_UNICODE);
        $this->ajaxReturn($list);die;
    }
    public function Getindex1info(){
        $operator = I('operator');
        // $where['operator.operator_name']=I('operator_name');
        $condition['operator.operator_name'] = $operator;
        $data = M('operator')->join('sign ON operator.operator_name = sign.operator_name')
                             ->join('country ON operator.country_id = country.location_id')
                             ->where($condition)
                             ->field('operator.*,country.name_chs,country.code,count(country_id) as signcount')
                             ->group('operator.operator_name')
                             ->find();

        if(empty($data)){
            $data = M('operator')->join('country ON operator.country_id = country.location_id')
                                 ->where($condition)
                                 ->field('operator.*,country.name_chs,country.code,count(country_id) as signcount')
                                 ->group('operator.operator_name')
                                 ->find();
            
            if($data['img']==''){
                $data['img']='../../Public/Home/images/icon.png';
            }
            $data['signcount']=0;
        }
/*        $a['equipment_id']=$data['id'];
        $b=M('equipment')->where($a)->select();
        foreach ($b as $key => $value) {
            $data['voice']=0;
            $data['message']=0;
            $data['data']=0;
            $data['location']=0;
            if($value['voice']!=''){
              $data['voice']=1;
            }else if($value['message']!=''){
              $data['message']=1;
            }else if($value['data']!=''){
              $data['data']=1;
            }else if($value['location']!=''){
              $data['location']=1;
            }
        }*/
        //dump($data);die;                      
        $list=json_encode($data,JSON_UNESCAPED_UNICODE);
        $this->ajaxReturn($list);die;
    }
    public function Getindex1info1(){
        $operator = I('operator');
        //$where['operator.operator_name']=I('operator_name');
        $condition['operator.operator_name'] = $operator;
        $data = M('operator')->join('sign ON operator.operator_name = sign.operator_name')
                             ->join('country ON operator.country_id = country.location_id')
                             ->where($condition)
                             ->field('operator.*,country.name_chs,country.code,count(country_id) as signcount')
                             ->group('operator.operator_name')
                             ->select();
        // dump($data);die;
        if(empty($data)){
           $data=M('operator')->join('country ON operator.country_id = country.location_id')
                              ->where($condition)
                              ->field('operator.*,country.name_chs,country.code')
                              ->group('operator.operator_name')
                              ->select();
          foreach ($data as $key => $value) {
            $data[$key]['signcount']=0;
          }
        }
        // dump($data);die;   
        $list=json_encode($data,JSON_UNESCAPED_UNICODE);
        $this->ajaxReturn($list);die;
    }

    public function GetsignOPerator(){//查询签约 国家的运营商
        $where['sign.sign_lng']=I('lng');
        $where['sign.sign_lat']=I('lat');

        $where['sign.operator_name']=I('operator_name');
        $data=M('sign')->join('operator ON sign.sign_name=operator.operator_name')
                       ->where($where)
                       ->field('operator.network_name,operator.id')
                       ->select();

        $list=json_encode($data,JSON_UNESCAPED_UNICODE);
        $this->ajaxReturn($list);die;
    }
    //******************************
    public function GetOperatorData(){
        // echo "1";die;
        $country = I('country');//国家名称
        $operator = I('operator');//运营商名称

        if(!empty($country)){
           $list=$this->GetOperatorDataFromCountry($country);
           $this->ajaxReturn($list);die;
        }else if (!empty($operator)){
           $list=$this->GetOperatorDataFromOperator($operator);
           $this->ajaxReturn($list);die;
        }else{
           $list=$this->GetAllOperatorData();
           $this->ajaxReturn($list);die;
        }
    }

    public function GetAllOperatorData(){
        $data = M('operator')->join('country ON operator.country_id = country.location_id')
                             ->field('country.name_chs,count(country_id) as count,country.lng,country.lat')
                             ->group('operator.country_id')
                             ->select();
       return  json_encode($data,JSON_UNESCAPED_UNICODE);
    }

    protected function GetOperatorDataFromOperator($operator){
        $condition['operator.operator_name'] = $operator;
        $data = M('operator')->join('sign ON operator.operator_name = sign.operator_name')
                             ->join('country ON operator.country_id = country.location_id')
                             ->where($condition)
                             ->field('operator.*,country.name_chs,count(country_id) as signcount')
                             ->group('operator.operator_name')
                             ->select();
        $data['count'] = count($data);
        // dump($data);die;
        return  json_encode($data,JSON_UNESCAPED_UNICODE);
    }

    protected function GetOperatorDataFromCountry($country){
        $condition['country.name_chs'] = $country;
        $data = M('operator')->join('country ON operator.country_id = country.location_id')
                             ->where($condition)
                             ->field('country.name_chs,country.MCC,country.lng,country.lat,operator.*')
                             ->select();

        $data['count'] = count($data);
        // dump($data);die;
        return  json_encode($data,JSON_UNESCAPED_UNICODE);
    }

    public function GetSignDataFromOperator1(){//签约关系
        $operator = I('operator');
        $condition['operator_name'] = $operator;

        $data = M('sign')->where($condition)->group('sign_lng')->select();
        dump($data);die;
        $list=json_encode($data,JSON_UNESCAPED_UNICODE);
        $this->ajaxReturn($list);die;
    }
    public function GetSignDataFromOperator(){//签约关系
        $operator = I('operator');
        $condition['sign.operator_name'] = $operator;
        $data1 = M('sign')->join('country ON sign.sign_location_id = country.location_id')
                         ->where($condition)->field('sign.*,country.*,count(name_chs) as count')->group('sign_lng')->select();
        // dump($data1);die;
        $data2=M('sign')->join('country ON sign.sign_location_id = country.location_id')
                        ->where($condition)->group('name_chs')->getField('name_chs',true);

        $SignData = [];
        foreach ($data2 as $key => $value) {
             $SignData[$value] = $this->GetSignDataGroupCountry($operator,$value);
        }
        $where['operator.operator_name']=$operator;
        $country=M('operator')->where($where)
                ->join('country ON operator.country_id = country.location_id')
                ->field('country.name_chs,operator.operator_name,operator.img')
                ->find();

      // dump($SignData);die;
        $data=array(
              'sign'=>$data1,
              'signdata'=>$SignData,
              'country'=>$country
          );
        //dump($country);die;
        $list=json_encode($data,JSON_UNESCAPED_UNICODE);
        $this->ajaxReturn($list);die;
    }

    public function GetSignDataGroupCountry($operator,$country){
               $condition['sign.operator_name'] = $operator;
               $condition['country.name_chs'] = $country;
               $SignData = M('sign')->join('country ON sign.sign_location_id = country.location_id')
                          ->where($condition)->getField('sign_name',true);
              return $SignData;

    }

    public function GetEquipmentData(){
        //1:获取设备厂商;2:获取设备类型;3:获取版本号;4:获取补丁号;5:获取表单数据;
        $type = I('type');

        $manufacturers = I('manu');            //设备厂商
        $manutype = I('manutype');             //设备类型
        $versionnum = I('versionnum');         //版本号
        $patchnum = I('patchnum');             //补丁号
        $page = I('page');
        $limit = I('limit');

        if ($type == 1){
            $data = M('equipment')->group('os')->getField('os',true);
        }elseif ($type == 2){
            $condition['os'] = $manufacturers;
            $data = M('equipment')->where($condition)
                                  ->group('type')
                                  ->order('id')
                                  ->getField('type',true);
        }elseif ($type == 3){
            $condition['os'] = $manufacturers;
            $condition['type'] = $manutype;
            $data = M('equipment')->where($condition)
                                  ->group('version_number')
                                  ->getField('version_number',true);
        }elseif ($type == 4){
            $condition['os'] = $manufacturers;
            $condition['type'] = $manutype;
            $condition['version_number'] = $versionnum;
            $data = M('equipment')->where($condition)
                                  ->group('patch_number')
                                  ->getField('patch_number',true);
        }elseif($type == 5){
            $condition['equipment.os'] = $manufacturers;
            $condition['equipment.type'] = $manutype;
            $condition['equipment.version_number'] = $versionnum;
            $condition['equipment.patch_number'] = $patchnum;
            $info = M('equipment')->join('country ON equipment.country_id = country.location_id')
                                  ->where($condition)
                                  ->field('equipment.*,country.name_chs')
                                  ->limit(($limit*$page-$limit),$limit)
                                  ->select();

            $count = M('equipment')->join('country ON equipment.country_id = country.location_id')
                                    ->where($condition)
                                    ->count();

            $data['info'] = $info;
            $data['count'] = $count;
        }

        $list=json_encode($data,JSON_UNESCAPED_UNICODE);
        $this->ajaxReturn($list);die;
    }

    public function GetEquipmentDataFromService(){
        //语音:voice;短信:message;数据:data;位置:location
        $service = I('service');
        $limit = I('limit');
        $page = I('page');
        $condition['equipment.'.$service] = '1';
        $data = M('equipment')->join('country ON equipment.country_id = country.location_id')
                              ->join('operator ON equipment.operator_id=operator.id')
                              ->where($condition)
                              ->field('equipment.*,country.name_chs,operator.operator_name')
                              ->limit(($limit*$page-$limit),$limit)
                              ->select();
        $data1['info'] = $data;
        $data1['count'] = M('equipment')->join('country ON equipment.country_id = country.location_id')
                                    ->join('operator ON equipment.operator_id=operator.id')
                                    ->where($condition)
                                    ->field('equipment.*,country.name_chs,operator.operator_name')
                                    ->count();

        $list = json_encode($data1,JSON_UNESCAPED_UNICODE);
        $this->ajaxReturn($list);die;
    }

    public function GetLacData(){
        $mcc = I('mcc');
        $type = I('type');
        $mnc = I('mnc');
        $lac = I('lac');
        $ci = I('ci');

        $condition['mcc'] =$mcc;
        $condition['type'] =$type;
        $condition['mnc'] =$mnc;
        $condition['lac'] =$lac;
        $condition['ci'] =$ci;

        $data = M('lac')->where($condition)->find();
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }

}