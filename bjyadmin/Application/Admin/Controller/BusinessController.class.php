<?php
namespace Admin\Controller;
use Common\Controller\AdminBaseController;

class BusinessController extends AdminBaseController{
	/**
	 * 首页
	 */
	public function index(){
		$this->display('Index/home');
	}

    public function operator(){
        $this->display();
    }

    public function querybusiness(){
        $this->display();
    }

    public function firms(){
        $this->display();
    }

    public function element(){
        $this->display();
    }

    public function lac(){
        $this->display();
    }


}
