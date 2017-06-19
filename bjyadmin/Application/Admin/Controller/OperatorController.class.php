<?php
namespace Admin\Controller;
use Common\Controller\AdminBaseController;

class OperatorController extends AdminBaseController{
	/**
	 * 首页
	 */
	public function index(){
		$this->display('Index/home');
	}

    public function operator(){
        $this->display();
    }

    public function sign(){
        $this->display();
    }

    public function net(){
        $this->display();
    }

    public function trail(){
        $this->display();
    }



}
