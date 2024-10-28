<XpProgTitle title='活動明細'/>
<div class="row">
    <div class={_Xp.clsLabel}>活動單號：</div>
    <div class={_Xp.clsData}>{row.Id || ''}</div>
    <div class={_Xp.clsLabel}>活動名稱：</div>
    <div class={_Xp.clsData}>{row.Name || ''}</div>
</div>
<div class="row">
    <div class={_Xp.clsLabel}>活動起日：</div>
    <div class={_Xp.clsData}>{row.StartDate || ''}</div>
    <div class={_Xp.clsLabel}>活動迄日：</div>
    <div class={_Xp.clsData}>{row.EndDate || ''}</div>
</div>
<div class="row">
    <div class={_Xp.clsLabel}>內容說明：</div>
    <div class={_Xp.clsData}>{row.Note || ''}</div>
    <div class={_Xp.clsLabel}>審核狀態：</div>
    <div class={_Xp.clsData}>{_Xp.auditStatusName(row) || ''}</div>
</div>
<div class="row">
    <div class={_Xp.clsLabel}>建檔時間：</div>
    <div class={_Xp.clsData}>{row.Created || ''}</div>
</div>

<div class='mt-3 mb-2 xp-prog'>活動物品清單 (總共{items.length}筆)：</div>
<XgTable {cols} rows={items}/>
<hr class='xg-sm-hide'>

<div class='mt-3 mb-2 xp-prog'>出貨單 (總共{outputs.length}筆)：</div>
{#each outputs as output}
    <div><a href='/OutputDetail/{output.Id}'>{output.Id}</a></div>
{/each}

<script lang='ts'>
    //import { onMount } from "svelte";
    import type ColDto from "@base/dto/ColDto";
    import XpProgTitle from "@/lib/XpProgTitle.svelte";
    import XgTable from "@base/lib/XgTable.svelte";
    import _Ajax from "@base/ts/_Ajax";
    import _Json from "@base/ts/_Json";
    import _Xp from "@/ts/_Xp";
	//import type { PageData } from "./$types";

    //route 傳入參數:id
    //export let params:any = {};

    export let data;

    $: row = data.row;
    $: items = data.items;   //物品
    $: outputs = data.outputs;  //入庫單號

    //form row
    //let row:any = {};

    //table columns
    const cols:ColDto[] = [
        { title:'物品名稱', fid:'ItemName' }, 
        { title:'捐贈數量', fid:'Amount'},
        { title:'單位', fid:'Unit' }, 
    ];

    //let items:any[] = [];   //物品
    //let outputs:any[] = [];  //入庫單號


</script>