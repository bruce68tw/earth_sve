<XgEditForm {crudE} bind:this={form} progName="我要捐贈" fnSetVm={()=>vm=vm} showMode={false} hasCrudR={false} >
    <XiText {vm} fid='UserName' title='稱謂' required maxLen={100} {cols} />
    <XiText {vm} fid='Phone' title='聯絡電話' required maxLen={100} {cols} />
    <XiTextarea {vm} fid='Note' title='捐贈內容' required {cols} maxLen={500} rowsCount={3}/>
    <div class='row'>
      <div class='col-md-2'>
        <XiLabel title='驗證碼' required/>
      </div>
      <div class='col-md-4'>
        <XiText {vm} fid='_Code' required custCss inBlock/>
        <XgCaptcha action='/Xp/Captcha' width="100px" height="40px"/>
      </div>
    </div>
</XgEditForm>

<script lang='ts'>
  import { onMount } from 'svelte';  
  import XpProgTitle from "@/lib/XpProgTitle.svelte";
  import CrudEdit from '@base/ts/CrudEdit';
  import XgEditForm from '@base/lib/XgEditForm.svelte';
  import XiText from '@base/lib/XiText.svelte'; 
  import XiTextarea from '@base/lib/XiTextarea.svelte'; 
  import XgCaptcha from '@base/lib/XgCaptcha.svelte'; 
  import XiLabel from '@base/lib/XiLabel.svelte';
  import _Fun from '@base/ts/_Fun';
  import _Str from '@base/ts/_Str';

  //variables
  const cols = "2,6";

  //2.master view-model
  let vm = {
    UserName: '',
    Phone: '',
    Note: '',
    _Captcha: '',  //captcha image
  };
  let crudE = new CrudEdit(vm);
  crudE.ctrl = 'GoDonate';  //因為沒有crudR, 必須手動設定

  let form:XgEditForm;
  onMount(async()=> {
    crudE.init(null, form);
    crudE.onCreate();   //進入新增模式
  });

</script>
