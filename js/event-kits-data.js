window.CHOULEGAL_EVENT_KITS = [
  {
    id: "inheritance-after-death",
    status: "優先整合",
    category: "家庭與繼承",
    title: "親人過世後的繼承處理",
    summary: "整理死亡登記、拋棄或限定繼承、遺產稅、繼承分配、不動產與保險等事項。",
    firstQuestions: ["死亡日期是何時？", "是否知道被繼承人有債務？", "遺產是否包含不動產、股票或保險？", "繼承人之間是否已有爭議？"],
    riskSignals: ["拋棄繼承期限接近或已逾期", "有不明債務或保證責任", "遺囑、特留分或生前贈與有爭議", "遺產包含不動產或高額保單"],
    deadlines: ["死亡登記通常應於死亡後 30 日內辦理", "拋棄繼承應於知悉得繼承起 3 個月內辦理", "遺產稅申報通常為死亡日起 6 個月內"],
    documents: ["死亡證明書", "戶籍謄本", "繼承系統表", "財產清單", "債務資料", "遺囑或保單資料"],
    tools: [
      { label: "繼承流程時間軸", href: "https://inheritance.choulegal.com/inheritance-timeline.html" },
      { label: "遺產繼承計算器", href: "https://inheritance.choulegal.com/calculator.html" },
      { label: "限定與拋棄繼承", href: "https://inheritance.choulegal.com/limited-inheritance.html" },
      { label: "特留分扣減", href: "https://inheritance.choulegal.com/forced-share.html" },
      { label: "遺產稅試算", href: "https://inheritance.choulegal.com/estate-tax-detail.html" },
      { label: "不動產繼承", href: "https://inheritance.choulegal.com/real-estate.html" },
      { label: "要保人身故", href: "https://inheritance.choulegal.com/insurance-policyholder-death.html" }
    ],
    experts: ["律師", "代書", "會計師", "地政士"],
    nextSteps: ["先確認期限", "整理財產與債務資料", "判斷是否需要拋棄或限定繼承", "再處理稅務與過戶"]
  },
  {
    id: "renounce-or-limited-inheritance",
    status: "詳情頁",
    category: "家庭與繼承",
    title: "要不要拋棄或限定繼承",
    summary: "針對遺產可能小於債務、債務不明或繼承人不想承擔風險的情境。",
    firstQuestions: ["是否知道債務總額？", "是否有連帶保證或票據責任？", "知悉繼承的日期是何時？", "是否已有債權人聯繫？"],
    riskSignals: ["期限只剩不到 30 日", "債務來源不明", "繼承人已處分遺產", "多人意見不一致"],
    deadlines: ["拋棄繼承通常為知悉得繼承起 3 個月內", "陳報遺產清冊應盡快處理"],
    documents: ["死亡證明", "戶籍資料", "財產清冊", "債務證明", "法院聲請資料"],
    tools: [
      { label: "限定與拋棄繼承", href: "https://inheritance.choulegal.com/limited-inheritance.html" },
      { label: "繼承流程時間軸", href: "https://inheritance.choulegal.com/inheritance-timeline.html" }
    ],
    experts: ["律師"],
    nextSteps: ["先確認 3 個月期限", "列出已知債務", "避免任意處分遺產", "必要時準備向法院聲請"]
  },
  {
    id: "will-and-forced-share-dispute",
    status: "詳情頁",
    category: "家庭與繼承",
    title: "遺囑與特留分爭議",
    summary: "處理遺囑效力、特留分侵害、生前贈與與繼承人分配爭議。",
    firstQuestions: ["是否有遺囑？", "遺囑形式是自書、公證、代筆或其他？", "是否有人主張分配不公平？", "是否有生前贈與或保險安排？"],
    riskSignals: ["遺囑形式可能不符法定要件", "繼承人被完全排除", "死亡前有大額贈與或財產移轉", "扣減權時效可能爭議"],
    deadlines: ["特留分相關請求有時效風險，應及早確認"],
    documents: ["遺囑", "財產清單", "贈與資料", "繼承人資料", "保單與受益人資料"],
    tools: [
      { label: "遺囑效力檢核", href: "https://inheritance.choulegal.com/will-validity.html" },
      { label: "特留分扣減", href: "https://inheritance.choulegal.com/forced-share.html" },
      { label: "保單與特留分", href: "https://inheritance.choulegal.com/insurance-forced-share.html" }
    ],
    experts: ["律師"],
    nextSteps: ["先確認遺囑形式", "計算特留分", "整理生前移轉紀錄", "評估是否需要保全或協商"]
  },
  {
    id: "divorce-property-and-children",
    status: "下一批",
    category: "婚姻與親子",
    title: "離婚、財產與子女安排",
    summary: "整合剩餘財產分配、子女扶養費、贍養費、離婚協議與損害賠償。",
    firstQuestions: ["是否已談好離婚？", "婚後財產與債務是否能列出？", "是否有未成年子女？", "是否有外遇、暴力或重大衝突？"],
    riskSignals: ["對方拒絕提供財產資料", "子女監護或扶養費爭議", "離婚協議內容不完整", "有家暴或保護令需求"],
    deadlines: ["具體期限依請求類型與程序而定"],
    documents: ["財產清單", "債務資料", "子女支出資料", "離婚協議草稿", "通訊紀錄"],
    tools: [
      { label: "剩餘財產分配", href: "https://inheritance.choulegal.com/property-split.html" },
      { label: "子女扶養費", href: "https://inheritance.choulegal.com/child-support.html" },
      { label: "贍養費試算", href: "https://inheritance.choulegal.com/alimony.html" },
      { label: "離婚協議檢核", href: "https://inheritance.choulegal.com/divorce-agreement.html" },
      { label: "離婚損害賠償", href: "https://inheritance.choulegal.com/divorce-damages.html" }
    ],
    experts: ["家事律師", "社工或諮商資源"],
    nextSteps: ["列財產與子女需求", "先檢核協議內容", "再評估是否談判或進入法院程序"]
  },
  {
    id: "child-support-adjustment",
    status: "詳情頁",
    category: "婚姻與親子",
    title: "子女扶養費與探視安排",
    summary: "處理扶養費金額、支出分擔、收入變動與探視安排爭議。",
    firstQuestions: ["子女年齡與居住地為何？", "雙方收入與支出狀況如何？", "是否已有協議或法院裁定？", "是否需要調整扶養費？"],
    riskSignals: ["未留存支出證明", "收入變動未反映在扶養費", "探視安排無法執行", "對方長期未給付"],
    deadlines: ["調整或強制執行依具體程序而定"],
    documents: ["收入證明", "子女支出資料", "既有協議或裁定", "匯款紀錄"],
    tools: [
      { label: "子女扶養費", href: "https://inheritance.choulegal.com/child-support.html" }
    ],
    experts: ["家事律師"],
    nextSteps: ["整理收入與支出", "確認既有協議效力", "評估調整或履行請求"]
  },
  {
    id: "dismissal-or-severance",
    status: "下一批",
    category: "勞動與職場",
    title: "被資遣或遭解雇",
    summary: "協助使用者判斷解雇理由、年資、資遣費、預告工資、調解路徑與應保存文件。",
    firstQuestions: ["公司給的解雇理由是什麼？", "到職與離職日期為何？", "是否有書面通知？", "是否已領到資遣費與非自願離職證明？"],
    riskSignals: ["未給書面理由", "未給資遣費或預告工資", "解雇理由與事實不符", "雇主要求簽不合理切結"],
    deadlines: ["勞資爭議調解或訴訟期限依請求類型而定，收到通知後應盡快處理"],
    documents: ["勞動契約", "薪資單", "出勤紀錄", "解雇通知", "通訊紀錄"],
    tools: [
      { label: "不當解雇分析", href: "https://labor.choulegal.com/wrongful-dismissal.html" },
      { label: "資遣費試算", href: "https://labor.choulegal.com/severance.html" },
      { label: "預告工資", href: "https://labor.choulegal.com/notice-calc.html" },
      { label: "勞資爭議流程", href: "https://labor.choulegal.com/dispute-guide.html" }
    ],
    experts: ["勞動法律師", "勞工局", "工會"],
    nextSteps: ["保留書面證據", "試算資遣與預告金額", "確認解雇理由", "準備調解資料"]
  },
  {
    id: "unpaid-wages-overtime",
    status: "詳情頁",
    category: "勞動與職場",
    title: "薪資、加班費或特休未給",
    summary: "處理加班費、平均工資、薪資單異常、特休折現與基本工資爭議。",
    firstQuestions: ["是否有薪資單？", "是否有打卡或出勤紀錄？", "加班是否經主管知悉？", "離職時特休是否結清？"],
    riskSignals: ["沒有完整出勤紀錄", "薪資項目名稱不清", "雇主以責任制拒絕加班費", "離職後未結清特休"],
    deadlines: ["工資請求有時效限制，應盡快整理資料"],
    documents: ["薪資單", "出勤紀錄", "班表", "加班申請", "勞動契約"],
    tools: [
      { label: "加班費試算", href: "https://labor.choulegal.com/overtime.html" },
      { label: "加班費明細", href: "https://labor.choulegal.com/overtime-detail.html" },
      { label: "平均工資", href: "https://labor.choulegal.com/avg-wage.html" },
      { label: "特休天數", href: "https://labor.choulegal.com/annual-leave.html" },
      { label: "薪資單體檢", href: "https://labor.choulegal.com/payslip-checker.html" }
    ],
    experts: ["勞工局", "勞動法律師"],
    nextSteps: ["整理薪資與出勤紀錄", "逐月計算差額", "向雇主提出書面確認", "必要時申請調解"]
  },
  {
    id: "work-injury",
    status: "詳情頁",
    category: "勞動與職場",
    title: "職災、醫療與失能補償",
    summary: "整理職災認定、醫療費、原領工資、失能或死亡補償與雇主責任。",
    firstQuestions: ["事故發生於工作中或通勤途中嗎？", "是否已就醫並留下診斷證明？", "雇主是否通報職災？", "是否有失能或長期照護需求？"],
    riskSignals: ["雇主拒絕承認職災", "沒有保存事故證據", "醫療期間薪資未給", "失能等級或後遺症有爭議"],
    deadlines: ["保險給付與求償程序有個別期限"],
    documents: ["診斷證明", "事故紀錄", "出勤紀錄", "雇主通報資料", "醫療收據"],
    tools: [
      { label: "職災補償", href: "https://labor.choulegal.com/work-injury.html" }
    ],
    experts: ["勞動法律師", "職災專業資源", "勞工局"],
    nextSteps: ["先保存事故與醫療證據", "確認是否通報", "試算補償項目", "評估保險給付與雇主責任"]
  },
  {
    id: "non-compete-or-confidentiality",
    status: "詳情頁",
    category: "勞動與職場",
    title: "競業禁止與保密條款",
    summary: "檢核離職後競業禁止、補償、營業秘密與保密義務風險。",
    firstQuestions: ["是否簽過競業禁止條款？", "公司是否給付補償？", "限制期間與地區為何？", "是否接觸營業秘密或客戶名單？"],
    riskSignals: ["限制範圍過廣", "未約定合理補償", "雇主以存證信函或律師函警告", "新工作與原職務高度重疊"],
    deadlines: ["回覆警告函或協商期限依通知內容而定"],
    documents: ["勞動契約", "競業條款", "保密協議", "離職文件", "雇主通知"],
    tools: [
      { label: "競業禁止條款", href: "https://labor.choulegal.com/non-compete.html" }
    ],
    experts: ["勞動法律師"],
    nextSteps: ["檢查條款五要件", "確認補償與限制範圍", "保存雇主通知", "再決定是否回覆或協商"]
  },
  {
    id: "traffic-accident-compensation",
    status: "下一批",
    category: "車禍與損害賠償",
    title: "車禍後的賠償協商",
    summary: "把醫療費、薪資損失、看護費、慰撫金、和解區間與證據整理放入同一條流程。",
    firstQuestions: ["是否已報案並取得事故資料？", "是否有受傷與醫療收據？", "肇責比例是否明確？", "是否已有保險公司聯繫？"],
    riskSignals: ["肇責未明", "傷勢仍在治療中", "對方催促快速和解", "未保存薪資損失或看護資料"],
    deadlines: ["刑事告訴與民事請求均有期限，應依傷害類型確認"],
    documents: ["事故初判表", "診斷證明", "醫療收據", "薪資證明", "看護資料", "保險聯繫紀錄"],
    tools: [
      { label: "車禍賠償試算", href: "https://inheritance.choulegal.com/accident.html" },
      { label: "看護費試算", href: "https://inheritance.choulegal.com/caregiver.html" },
      { label: "和解金試算", href: "https://inheritance.choulegal.com/settlement-calc.html" }
    ],
    experts: ["律師", "保險理賠人員"],
    nextSteps: ["先整理事故與醫療證據", "估算損害項目", "避免過早簽和解", "再判斷談判策略"],
    guidedFlow: {
      intro: "回答幾個問題後，系統會整理目前階段、應保存證據、可先使用的工具與需要留意的風險。",
      steps: [
        {
          id: "stage",
          title: "事故目前進到哪個階段？",
          prompt: "先判斷使用者是剛發生事故、正在治療，還是已經開始談和解。",
          options: [
            { label: "剛發生事故", note: "優先報案、就醫、保存現場照片與行車紀錄器資料。", flags: ["保存證據", "取得事故資料"] },
            { label: "正在治療中", note: "先累積診斷證明、醫療收據、請假與薪資損失資料。", flags: ["醫療證明", "薪資損失"] },
            { label: "正在談和解", note: "先確認肇責、傷勢是否穩定、求償項目是否完整。", flags: ["和解評估", "避免過早簽署"] }
          ]
        },
        {
          id: "injury",
          title: "是否有人受傷？",
          prompt: "受傷程度會影響醫療費、看護費、工作損失、慰撫金與是否需要專業協助。",
          options: [
            { label: "只有車損或財損", note: "先整理維修估價、照片、事故資料與責任比例。", flags: ["財損資料"] },
            { label: "輕傷，已就醫", note: "保留診斷證明與收據，後續可估算醫療費與慰撫金範圍。", flags: ["醫療費", "慰撫金"] },
            { label: "重傷或仍在復健", note: "暫不宜急著和解，應整理長期治療、看護與工作損失資料。", flags: ["高風險", "建議諮詢律師"] }
          ]
        },
        {
          id: "liability",
          title: "肇責比例是否已經明確？",
          prompt: "肇責不明時，金額試算只能作為整理項目，不能當作最後談判底線。",
          options: [
            { label: "已有初判表或明確肇責", note: "可先依肇責比例估算求償區間。", flags: ["可估算區間"] },
            { label: "還沒有初判表", note: "先取得警方資料與保險聯繫紀錄，再進入金額協商。", flags: ["先補資料"] },
            { label: "雙方對肇責有爭議", note: "應保存證據並評估鑑定或調解，不宜只用口頭比例談和解。", flags: ["肇責爭議", "建議專業協助"] }
          ]
        },
        {
          id: "settlement",
          title: "對方或保險公司是否催促和解？",
          prompt: "和解書通常會影響後續請求。簽署前應確認損害項目是否完整。",
          options: [
            { label: "尚未談和解", note: "先完成損害項目整理，再決定談判順序。", flags: ["整理清單"] },
            { label: "已有和解金額", note: "先用和解金試算檢查項目是否漏列，不急著簽署。", flags: ["檢查和解"] },
            { label: "已被要求簽和解書", note: "若傷勢未穩定或肇責有爭議，建議先暫緩並尋求專業意見。", flags: ["高風險", "暫緩簽署"] }
          ]
        }
      ],
      recommendedTools: ["accident", "caregiver", "settlement-calc"]
    }
  },
  {
    id: "general-damages-or-settlement",
    status: "詳情頁",
    category: "車禍與損害賠償",
    title: "一般損害賠償與和解",
    summary: "適用借貸、侵權、財物損害、人身損害與其他民事賠償協商。",
    firstQuestions: ["損害發生日期是何時？", "是否有契約或證據？", "是否能估算實際損失？", "是否已收到對方和解提議？"],
    riskSignals: ["時效接近", "證據不足", "對方要求簽放棄權利文件", "損害金額難以證明"],
    deadlines: ["請求權時效依權利類型而定"],
    documents: ["契約", "收據", "照片", "通訊紀錄", "估價單", "醫療資料"],
    tools: [
      { label: "和解金試算", href: "https://inheritance.choulegal.com/settlement-calc.html" },
      { label: "法定利息計算", href: "https://inheritance.choulegal.com/interest-calc.html" },
      { label: "消滅時效", href: "https://inheritance.choulegal.com/prescription.html" }
    ],
    experts: ["律師"],
    nextSteps: ["先確認時效", "整理損害證據", "計算本金與利息", "評估和解或訴訟"]
  },
  {
    id: "online-shopping-refund",
    status: "候選",
    category: "消費與契約",
    title: "網購退貨、退費與七日鑑賞期",
    summary: "整理七日鑑賞期、例外商品、退貨費用、退款延遲與申訴流程。",
    firstQuestions: ["商品何時收到？", "是否屬於排除鑑賞期商品？", "是否已通知商家退貨？", "付款方式為信用卡或轉帳？"],
    riskSignals: ["商家拒絕退貨", "已拆封但商品仍可退爭議", "跨境購物求償困難", "信用卡付款期限接近"],
    deadlines: ["七日鑑賞期通常自收受商品後起算"],
    documents: ["訂單資料", "付款紀錄", "商品照片", "客服對話", "退貨通知"],
    tools: [
      { label: "消費爭議工具主站", href: "https://consumer.choulegal.com" }
    ],
    experts: ["消保團體", "消費者服務中心"],
    nextSteps: ["先確認是否在期限內", "保存商品與對話證據", "書面通知退貨", "必要時申訴或信用卡爭議款"]
  },
  {
    id: "fitness-travel-tuition-refund",
    status: "候選",
    category: "消費與契約",
    title: "健身房、旅遊與補習退費",
    summary: "處理長期服務契約終止、退費比例、手續費與業者拒退爭議。",
    firstQuestions: ["契約類型是健身、旅遊、補習或其他？", "是否已有書面契約？", "已使用多少服務？", "業者主張扣款項目為何？"],
    riskSignals: ["業者拒給契約", "扣款項目不明", "退費計算方式與契約不符", "使用期限或優惠條款有爭議"],
    deadlines: ["退費或申訴期限依契約與法規而定"],
    documents: ["契約", "收據", "刷卡紀錄", "課程使用紀錄", "客服對話"],
    tools: [
      { label: "消費爭議工具主站", href: "https://consumer.choulegal.com" }
    ],
    experts: ["消保團體", "律師"],
    nextSteps: ["先取得契約", "列出已使用與未使用服務", "要求業者提供計算式", "再判斷申訴或存證信函"]
  },
  {
    id: "medical-beauty-or-health-dispute",
    status: "候選",
    category: "消費與契約",
    title: "醫美、美容與健康服務爭議",
    summary: "整理美容或醫美服務退費、療程爭議、效果不符與醫療爭議分流。",
    firstQuestions: ["服務是美容、瘦身美容或醫療行為？", "是否有療程契約與收據？", "爭議是退費、傷害或效果不符？", "是否已就醫或保存照片？"],
    riskSignals: ["可能涉及醫療行為", "業者拒絕提供契約", "身體損害仍在發展", "廣告或說明與實際服務落差大"],
    deadlines: ["醫療爭議、消費申訴與民事請求期限需分別判斷"],
    documents: ["契約", "收據", "廣告截圖", "療程紀錄", "醫療診斷", "照片"],
    tools: [
      { label: "消費爭議工具主站", href: "https://consumer.choulegal.com" }
    ],
    experts: ["消保團體", "醫療法律師", "醫療院所"],
    nextSteps: ["先區分消費退費與醫療損害", "保存契約與身體狀況證據", "避免單憑口頭協議和解"]
  },
  {
    id: "rental-deposit-repair",
    status: "候選",
    category: "租屋與不動產",
    title: "押金、修繕與退租糾紛",
    summary: "處理押金返還、房屋修繕、提前解約、房東扣款與房客自救流程。",
    firstQuestions: ["租約是否仍有效？", "押金金額與扣款理由為何？", "修繕問題是否已通知房東？", "是否有照片或對話紀錄？"],
    riskSignals: ["房東拒絕退押金", "修繕影響居住安全", "扣款未提出明細", "房東要求提前搬離"],
    deadlines: ["租約終止與押金返還依契約及具體情況判斷"],
    documents: ["租約", "押金收據", "照片", "修繕通知", "對話紀錄", "點交紀錄"],
    tools: [
      { label: "租屋權益工具主站", href: "https://rental.choulegal.com" }
    ],
    experts: ["租賃專業律師", "地方政府租賃爭議資源"],
    nextSteps: ["保存房況與通知紀錄", "要求扣款明細", "確認租約約定", "必要時申請調解"]
  },
  {
    id: "property-purchase-or-title-risk",
    status: "詳情頁",
    category: "租屋與不動產",
    title: "不動產產權與交易風險",
    summary: "適用買賣、繼承取得、抵押設定、限制登記與產權檢核。",
    firstQuestions: ["不動產來源是買賣、繼承或贈與？", "是否取得最新謄本？", "是否有抵押、查封或共有？", "是否需要出售或過戶？"],
    riskSignals: ["共有關係複雜", "有限制登記", "稅務成本未估算", "交易對象或權利狀態不明"],
    deadlines: ["過戶、稅務與申報期限依交易型態而定"],
    documents: ["土地與建物謄本", "買賣契約", "繼承資料", "稅單", "權狀"],
    tools: [
      { label: "產權檢核", href: "https://inheritance.choulegal.com/property-check.html" },
      { label: "不動產繼承", href: "https://inheritance.choulegal.com/real-estate.html" },
      { label: "房地合一稅", href: "https://inheritance.choulegal.com/property-sale-tax.html" }
    ],
    experts: ["代書", "地政士", "會計師", "律師"],
    nextSteps: ["先取得謄本", "檢查登記限制", "估算稅費", "再決定交易或過戶"]
  },
  {
    id: "debt-collection-or-payment-order",
    status: "候選",
    category: "債務與金錢",
    title: "被追債、支付命令與強制執行",
    summary: "處理債務確認、時效、利息、支付命令異議與執行風險。",
    firstQuestions: ["是否真的欠款？", "是否收到法院文件？", "債務發生日期與最後付款日期為何？", "利息或違約金是否過高？"],
    riskSignals: ["收到支付命令但未處理", "時效可能已完成", "利息或費用不明", "帳戶或薪資可能被執行"],
    deadlines: ["支付命令異議有短期法定期間，收到文件後應立即確認"],
    documents: ["法院文件", "借據或契約", "付款紀錄", "催收通知", "利息計算資料"],
    tools: [
      { label: "消滅時效", href: "https://inheritance.choulegal.com/prescription.html" },
      { label: "法定利息計算", href: "https://inheritance.choulegal.com/interest-calc.html" },
      { label: "和解金試算", href: "https://inheritance.choulegal.com/settlement-calc.html" }
    ],
    experts: ["律師", "債務協商資源"],
    nextSteps: ["先確認是否有法院期限", "核對本金與利息", "判斷時效", "必要時提出異議或協商"]
  },
  {
    id: "loan-or-private-borrowing",
    status: "候選",
    category: "債務與金錢",
    title: "私人借款與欠款未還",
    summary: "協助整理借款證據、利息計算、時效、催告與和解選項。",
    firstQuestions: ["是否有借據或轉帳紀錄？", "是否約定還款期限？", "是否有利息約定？", "對方是否承認欠款？"],
    riskSignals: ["沒有書面證據", "時效接近", "利息約定不清", "對方脫產或失聯"],
    deadlines: ["借款請求權時效依具體法律關係判斷"],
    documents: ["借據", "轉帳紀錄", "對話紀錄", "催告紀錄", "利息約定"],
    tools: [
      { label: "法定利息計算", href: "https://inheritance.choulegal.com/interest-calc.html" },
      { label: "消滅時效", href: "https://inheritance.choulegal.com/prescription.html" },
      { label: "和解金試算", href: "https://inheritance.choulegal.com/settlement-calc.html" }
    ],
    experts: ["律師"],
    nextSteps: ["整理借款證據", "確認時效", "計算本金與利息", "再決定催告、調解或訴訟"]
  },
  {
    id: "insurance-beneficiary-tax",
    status: "詳情頁",
    category: "保險與稅務",
    title: "保險受益人、遺產與稅務風險",
    summary: "處理保險金是否納入遺產、要保人身故、受益人順位、保價金與稅務風險。",
    firstQuestions: ["要保人、被保險人與受益人分別是誰？", "保費由誰支付？", "是否在死亡前近期變更？", "是否涉及遺產或特留分爭議？"],
    riskSignals: ["要保人身故未處理", "保費來源與名義不一致", "死亡前短期變更受益人", "高額保單可能有實質課稅疑慮"],
    deadlines: ["保險請領與稅務申報需依個案處理"],
    documents: ["保單", "受益人資料", "保費繳納紀錄", "死亡證明", "稅務資料"],
    tools: [
      { label: "受益人順序", href: "https://inheritance.choulegal.com/insurance-beneficiary-order.html" },
      { label: "保單遺產風險", href: "https://inheritance.choulegal.com/insurance-estate-risk.html" },
      { label: "要保人身故", href: "https://inheritance.choulegal.com/insurance-policyholder-death.html" },
      { label: "保單與離婚", href: "https://inheritance.choulegal.com/insurance-divorce.html" }
    ],
    experts: ["保險顧問", "會計師", "律師"],
    nextSteps: ["先確認三種保險身分", "整理保費來源", "檢查稅務與繼承風險", "再處理請領或變更"]
  },
  {
    id: "gift-tax-and-estate-planning",
    status: "候選",
    category: "保險與稅務",
    title: "贈與、遺產稅與財產移轉",
    summary: "整理贈與稅、分年贈與、夫妻互贈、遺產稅與未來繼承風險。",
    firstQuestions: ["要移轉的是現金、不動產、股票或保單？", "金額是否超過免稅額？", "是否有近期死亡或健康風險？", "是否有其他繼承人可能爭議？"],
    riskSignals: ["只看節稅而忽略特留分", "不動產移轉成本未估算", "死亡前短期移轉", "資金來源說明不足"],
    deadlines: ["贈與稅申報期限依贈與時間起算"],
    documents: ["財產資料", "贈與契約", "匯款紀錄", "不動產資料", "親屬資料"],
    tools: [
      { label: "贈與稅試算", href: "https://inheritance.choulegal.com/gift-tax.html" },
      { label: "節稅規劃", href: "https://inheritance.choulegal.com/gift-planner.html" },
      { label: "遺產稅試算", href: "https://inheritance.choulegal.com/estate-tax-detail.html" }
    ],
    experts: ["會計師", "律師", "地政士"],
    nextSteps: ["先列出財產與關係人", "估算贈與與遺產稅", "評估特留分與繼承爭議", "再決定移轉方式"]
  },
  {
    id: "government-complaint-or-mediation",
    status: "候選",
    category: "行政與申訴",
    title: "申訴、調解與機關程序",
    summary: "協助民眾分辨該找勞工局、消保官、調解委員會、法院或其他機關。",
    firstQuestions: ["爭議對象是雇主、商家、房東、個人或政府機關？", "是否已有書面證據？", "希望退費、賠償、履行或停止行為？", "是否有期限或即時風險？"],
    riskSignals: ["期限短", "對方可能脫產或消失", "證據仍在對方手上", "多個程序可能互相影響"],
    deadlines: ["不同申訴、調解與訴訟程序有不同期限"],
    documents: ["契約", "收據", "通知", "通訊紀錄", "照片", "身分與案件資料"],
    tools: [
      { label: "勞資爭議流程", href: "https://labor.choulegal.com/dispute-guide.html" },
      { label: "消費爭議工具主站", href: "https://consumer.choulegal.com" }
    ],
    experts: ["主管機關", "消保團體", "律師"],
    nextSteps: ["先辨識爭議類型", "整理證據", "選擇申訴或調解管道", "保留升級到訴訟的資料"]
  },
  {
    id: "freelancer-contract-payment",
    status: "候選",
    category: "企業與工作者基本法務",
    title: "自由工作者收款與契約爭議",
    summary: "處理接案、承攬、服務契約、尾款未付、驗收與著作權歸屬。",
    firstQuestions: ["是否有報價單或合約？", "交付成果是否已完成？", "對方拒付理由是什麼？", "是否涉及著作權或使用範圍？"],
    riskSignals: ["沒有書面驗收標準", "尾款金額高", "對方已使用成果但拒付", "權利歸屬未約定"],
    deadlines: ["契約請求權與催告程序依具體內容判斷"],
    documents: ["合約", "報價單", "交付紀錄", "驗收紀錄", "付款紀錄", "對話紀錄"],
    tools: [
      { label: "法定利息計算", href: "https://inheritance.choulegal.com/interest-calc.html" },
      { label: "消滅時效", href: "https://inheritance.choulegal.com/prescription.html" }
    ],
    experts: ["律師", "調解資源"],
    nextSteps: ["整理交付與付款證據", "確認驗收與權利條款", "書面催告", "再評估調解或訴訟"]
  },
  {
    id: "small-business-employment-compliance",
    status: "候選",
    category: "企業與工作者基本法務",
    title: "小店與新創的人事合規",
    summary: "適用雇主、店家與小型企業檢查薪資、工時、勞健保、資遣與競業風險。",
    firstQuestions: ["是否有員工或兼職？", "是否有打卡與薪資紀錄？", "是否有勞健保與勞退提撥？", "是否打算資遣或調整職務？"],
    riskSignals: ["未留出勤紀錄", "低於基本工資", "未提繳勞退", "未依法給資遣與預告"],
    deadlines: ["勞動檢查與資遣程序依具體行為判斷"],
    documents: ["勞動契約", "薪資清冊", "出勤紀錄", "勞保與勞退資料", "工作規則"],
    tools: [
      { label: "合規自檢", href: "https://labor.choulegal.com/compliance-audit.html" },
      { label: "人事成本試算", href: "https://labor.choulegal.com/hr-cost.html" },
      { label: "基本工資檢核", href: "https://labor.choulegal.com/min-wage.html" },
      { label: "競業禁止條款", href: "https://labor.choulegal.com/non-compete.html" }
    ],
    experts: ["勞動法律師", "人資顧問", "會計師"],
    nextSteps: ["先檢查薪資與出勤資料", "補齊法定提撥", "降低高罰鍰風險", "必要時建立標準文件"]
  }
];
