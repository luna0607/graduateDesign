// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '退出',
    path: '/user/login',
    icon: 'yonghu',
  },
];

const asideMenuConfig = [
  {
    name: '工作台',
    path: '/dashboard',
    icon: 'home2',
  },
  {
    name: '数据统计',
    path: '/report',
    icon: 'chart',
  },
  {
    name: '商品管理',
    path: '/goods',
    icon: 'shopcar',
  },
  {
    name: '订单管理',
    path: '/order/list',
    icon: 'shopcar',
  },
  {
    name: '进货管理',
    path: '/dispatch',
    icon: 'clock',
  },
  {
    name: '会员管理',
    path: '/customer',
    icon: 'publish',
  },
  {
    name: '供应商管理',
    path: '/suplyer',
    icon: 'publish',
  },
  {
    name: '添加订单',
    path: '/add/order',
    icon: 'edit2',
  },
];

export { headerMenuConfig, asideMenuConfig };
