/**
 * Settings: 配置项
 */
import { $ } from './Base';
class Settings {
	constructor() {
		/**
		 * 拖拽
		 */
		const drag = {
			// 是否支持拖拽功能
			supportDrag: true,

			// 拖拽前事件
			dragBefore: $.noop,

			// 拖拽后事件
			dragAfter: $.noop
		};

		/**
		 * 宽度调整
		 */
		const adjust = {
			// 是否支持宽度调整功能
			supportAdjust: true,

			// 宽度调整前事件
			adjustBefore: $.noop,

			// 宽度调整后事件
			adjustAfter: $.noop
		};

		/**
		 * 表头提醒
		 */
		const remind = {
			// 是否支持表头提示信息[需在地应的TH上增加属性remind]
			supportRemind: false
		};

		/**
		 * 配置列表
		 */
		const config = {
			// 是否支持配置列表功能[操作列是否可见]
			supportConfig: true
		};

		/**
		 * 样式
		 */
		const gridStyle = {
			// 宽度配置
			width: '100%',

			// 高度配置, 可配置的最小宽度为300px
			height: '300px',

			// 文本对齐方式
			// textAlign: '',       // v2.3.15弃用

			// 动画效果时长
			animateTime: 300
		};

		/**
		 * 本地缓存
		 */
		const cache = {
			// 是否禁用本地缓存
			disableCache: false
		};

		/**
		 * 排序
		 */
		const sort = {
			// 排序：是否支持排序功能
			supportSorting: false,

			// 是否为组合排序[只有在支持排序的情况下生效
			isCombSorting: false,

			// 排序字段前缀, 示例: 列名='date', sortKey='sort_', 排序参数则为sort_date
			sortKey: 'sort_',

			// 存储排序数据[不对外公开参数]
			sortData: {},

			// 排序：升序标识[该标识将会传至数据接口]
			sortUpText: 'ASC',

			// 排序：降序标识[该标识将会传至数据接口]
			sortDownText: 'DESC',

			// 排序事件发生前
			sortingBefore: $.noop,

			// 排序事件发生后
			sortingAfter: $.noop
		};

		/**
		 * 分页
		 */
		const ajaxPage = {
			// 是否支持配置列表ajxa分页
			supportAjaxPage: false,

			// 用于配置列表每页展示条数选择框
			sizeData: [10, 20, 30, 50, 100],

			// 每页显示条数，如果使用缓存且存在缓存数据，那么该值将失效
			pageSize: 20,

			// 存储分页数据[不对外公开参数]
			pageData: {},

			// 其它需要带入的参数，该参数中设置的数据会在分页或排序事件中以参数形式传递
			query: {},

			// 分页事件发生前
			pagingBefore: $.noop,

			// 分页事件发生后
			pagingAfter: $.noop
		};

		/**
		 * 序号
		 */
		const autoOrder = {
			// 是否支持自动序号
			supportAutoOrder: true
		};

		/**
		 * 选择与反选
		 */
		const checkbox = {
			// 是否支持选择与反选
			supportCheckbox: true
		};

		/**
		 * 国际化
		 */
		const i18n = {
			// 选择使用哪种语言，暂时支持[zh-cn:简体中文，en-us:美式英语] 默认zh-cn
			i18n: 'zh-cn'
		};

		/**
		 * 数据交互相关项
		 */
		const gridData = {
			// 表格列数据配置项
			columnData: [],

			// 表格grid-manager所对应的值[可在html中配置]
			gridManagerName: '',

			// 获取表格数据地址，配置该参数后，将会动态获取数据
			ajax_url: '',

			// ajax请求类型['GET', 'POST']默认GET
			ajax_type: 'GET',

			// ajax请求头信息
			ajax_headers: {},

			// ajax请求之前,与jTool的beforeSend使用方法相同
			ajax_beforeSend: $.noop,

			// ajax成功后,与jTool的success使用方法相同
			ajax_success: $.noop,

			// ajax完成后,与jTool的complete使用方法相同
			ajax_complete: $.noop,

			// ajax失败后,与jTool的error使用方法相同
			ajax_error: $.noop,

			// ajax静态数据,配置后ajax_url将无效
			ajax_data: undefined,

			// 请求前处理程序, 可以通过该方法修改全部的请求参数 @v2.3.14
			requestHandler: $.noop,

			// 执行请求后执行程序, 通过该程序可以修改返回值格式. 仅有成功后该函数才会执行 @v2.3.14
			responseHandler: $.noop,

			// ajax请求返回的列表数据key键值,默认为data
			dataKey: 'data',

			// ajax请求返回的数据总条数key键值,默认为totals
			totalsKey: 'totals'
		};

		/**
		 * 表格导出
		 */
		const gridExport = {
			// 支持导出表格数据
			supportExport: true
		};

		const settings = {
			...drag,
			...adjust,
			...remind,
			...config,
			...gridStyle,
			...cache,
			...sort,
			...ajaxPage,
			...autoOrder,
			...checkbox,
			...i18n,
			...gridData,
			...gridExport
		};
		$.extend(true, this, settings);
	}
}

// 表格中使用到的国际化文本信息
class TextSettings {
	constructor() {
		this['order-text'] = {
			'zh-cn': '序号',
			'en-us': 'order'
		};
		this['first-page'] = {
			'zh-cn': '首页',
			'en-us': 'first'
		};
		this['previous-page'] = {
			'zh-cn': '上一页',
			'en-us': 'previous'
		};
		this['next-page'] = {
			'zh-cn': '下一页',
			'en-us': 'next'
		};
		this['last-page'] = {
			'zh-cn': '尾页',
			'en-us': 'last'
		};
		this['dataTablesInfo'] = {
			'zh-cn': '此页显示 {0}-{1} 共{2}条',
			'en-us': 'this page show {0}-{1} count {2}'
		};
		this['goto-first-text'] = {
			'zh-cn': '跳转至',
			'en-us': 'goto'
		};
		this['goto-last-text'] = {
			'zh-cn': '页',
			'en-us': 'page'
		};
		this['refresh'] = {
			'zh-cn': '重新加载',
			'en-us': 'Refresh'
		};
		this['save-as-excel'] = {
			'zh-cn': '另存为Excel',
			'en-us': 'Save as Excel'
		};
		this['save-as-excel-for-checked'] = {
			'zh-cn': '已选中项另存为Excel',
			'en-us': 'Save selected as Excel'
		};
		this['config-grid'] = {
			'zh-cn': '配置表',
			'en-us': 'Setting Grid'
		};
		this['checkall-text'] = {
			'zh-cn': '全选',
			'en-us': 'All'
		};
	}
}
export { Settings, TextSettings };
