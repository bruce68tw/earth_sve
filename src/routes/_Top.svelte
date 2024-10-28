<header>
    <nav class="navbar navbar-expand-sm navbar-light border-bottom">
        <div class="container-fluid">
            <!-- system name -->
            <a class="navbar-brand" href={null}>{_Fun.apName}</a>

            <!-- 選單按鈕, 手機才顯示(d-block d-sm-none) -->
            <button type="button" class="navbar-toggler d-block d-sm-none" data-bs-toggle="collapse" data-bs-target="#menuBody">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- 功能表內容 -->
            <div class="navbar-collapse collapse" id="menuBody">
                <ul class="navbar-nav flex-grow-1">
                    <li>
                        <a class="nav-link" href='/'>
                            <i class="ico-home"></i>
                        </a>
                    </li>    
                    <li class="nav-item">
                        <a class="nav-link text-dark" href='/Act'>活動查詢</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href='/Donate'>捐贈查詢</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href='/GoDonate'>我要捐贈</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href='/GoVol'>我要報名志工</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<script lang='ts'>
    import _Fun from "@base/ts/_Fun";
</script>

<style>
	nav {
		/*color: #EAFFFF;*/
		background: #F7F6F5;
		/*height: 45px;*/
		border-bottom: none !important;
	}
    nav li {
        margin: auto 5px;
    }
    nav i {
        font-size: 20px;
    }
</style>