<XpProgTitle title='捐贈查詢'/>
<XgTable {cols} {rows}/>
<XgPager bind:this={pager} fnOnFetch={fetchPageA}/>

<script lang="ts">
    import { onMount } from "svelte";
    import type ColDto from "@base/dto/ColDto";
    import XpProgTitle from "@/lib/XpProgTitle.svelte";
    import XgTable from "@base/lib/XgTable.svelte";
    import XgPager from "@base/lib/XgPager.svelte";
    import _Fun from "@base/ts/_Fun";
    import _Str from "@base/ts/_Str";
    import _VM from "@base/ts/_VM";
    import _Xp from "@/ts/_Xp";

  //table columns
  let cols:ColDto[] = [
    { Title:'捐贈者', Fid:'DonorName' }, 
    { Title:'捐贈內容', Fid:'_link', Render:(row:any)=> [row.Title, `/DonateDetail/${row.Id}`]}, 
    { Title:'預計到貨日', Fid:'PlanDate' }, 
    { Title:'審核狀態', Render:(row:any)=> _Xp.auditStatusName(row, true)}, 
    { Title:'入庫狀態', Render:(row:any)=> _Xp.inputStatusName(row)}, 
    { Title:'建檔日期', Fid:'Created' }, 
  ];

  let pager:XgPager;
  let rows:any[] = [];

  onMount(async()=> { 
    await fetchPageA(1, true, true);
  });

  //fetch page rows
  async function fetchPageA(page:number, reCount:boolean, setPage:boolean):Promise<void> {
    rows = await pager.fetchPageA('Donate', page, null, '', reCount, setPage);
  }

</script>