<XpProgTitle title='區塊鏈資料'/>
<div class="row mt-2">
  <div class="col-md-2 xi-label">
    <a href='{_Xp.txUrl}{row.TxHash}' target="_blank" rel="no referrer">交易Hash</a>
  </div>
  <div class="col-md-6">
    <input value={row.TxHash || ''} type='text' class='form-control xi-input' readonly />
  </div>
</div>
<div class="row">
  <div class="col-md-2 xi-label">交易Log</div>
  <div class="col-md-6">
    <input value={row.TxLog || ''} type='text' class='form-control xi-input' readonly />
  </div>
</div>
<div class="row">
  <div class="col-md-2 xi-label">資料內容</div>
  <div class="col-md-6">
    <textarea value={row.TxLogSource || ''} rows={8} class='form-control mb-2 xi-input' readonly />      
    <a href='{_Xp.md5Url}' target="_blank" rel="no referrer">資料內容MD5驗証</a>
  </div>
</div>

<script lang='ts'>
  import { onMount } from 'svelte';
  import XpProgTitle from "@/lib/XpProgTitle.svelte";
  import _Xp from '@/ts/_Xp';
  import _Ajax from '@base/ts/_Ajax';
  import _Tool from '@base/ts/_Tool';

  //route 傳入參數: type,id
  export let params:any = {};
  //console.log(`params type=${params.type}, id=${params.id}`);

  let row:any = {};
  onMount(async()=> { 
      let act = (params.type == 'In') ? 'Input' :
        (params.type == 'Out') ? 'Output' : '';
      if (act == ''){
        _Tool.msg('區塊鏈網址有誤。');
      } else {
        row = await _Ajax.getJsonA(`/${act}/GetTx`, false, {id:params.id}) || {};
      }
  });

</script>