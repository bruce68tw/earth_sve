<!-- d-flex flex-column for 內容上下排序, class name 使用 xg0- for 在 _color.css 設定顏色,字型大小 -->
<div class='d-flex flex-column h-100' style="height2:100%">
    <Top/>    
    <!-- flex-grow-1 for 展開剩下高度, d-flex flex-row for 內容左右排序 -->
    <div class="flex-grow-1 d-flex flex-row">
        <div class="xg0-right" style="width:100%">
          <slot></slot>
      </div>
    </div>
    <Footer/>
</div>
<XgTool bind:this={xgTool} />

<script lang='ts'>
  //在這裡載入變動的 css 才可使用 @base
  import '@base/base.css';
  import '@base/datatables-1.11.5-bruce.css';

  import { onMount } from 'svelte';
  import Top from './_Top.svelte';
  import Footer from './_Footer.svelte';
  import XgTool from '@base/lib/XgTool.svelte';
  import _Ajax from '@base/ts/_Ajax';
  import _Str from '@base/ts/_Str';
  import _LeftMenu from '@base/ts/_LeftMenu';
  import _Fun from '@base/ts/_Fun';
  import _Tool from '@base/ts/_Tool';
  import _Cookie from '@base/ts/_Cookie';
	import _AjaxBase from '@base/ts/_AjaxBase';
  import _Xp from '../ts/_Xp';

  //屬性名稱必須為data !!
  export let data;

  let xgTool:XgTool;

  //先執行 initA, 再載入Main
  onMount(()=> {
    _Xp.txUrl = data.txUrl
    _Xp.md5Url = data.md5Url;
    _Xp.hasEther = _Str.notEmpty(_Xp.txUrl);
    _Tool.init(xgTool);

    //cookie 寫入 userId
    _Cookie.add("UserId", _Str.newId(), 1);    
  });

</script>