window.CHOULEGAL_EVENT_KITS = [
  {
    id: "inheritance-after-death",
    status: "引導式",
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
    nextSteps: ["先確認期限", "整理財產與債務資料", "判斷是否需要拋棄或限定繼承", "再處理稅務與過戶"],
    guidedFlow: {
      intro: "先從期限和債務判斷。頁面會把繼承初期容易漏掉的事項，整理成一份短清單。",
      steps: [
        {
          id: "date",
          title: "親人過世多久了？",
          prompt: "期限會影響死亡登記、拋棄繼承與遺產稅申報。先確認具體日期。",
          options: [
            {
              label: "30 日內",
              note: "先處理死亡登記與戶籍資料，同步開始盤點財產與債務。",
              flags: ["死亡登記", "期限充足"],
              actions: ["確認死亡日期與戶籍資料", "申請死亡證明與戶籍謄本", "建立財產與債務清單"],
              documents: ["死亡證明書", "除戶謄本", "繼承人戶籍資料"],
              toolKeys: ["inheritance-timeline"]
            },
            {
              label: "超過 30 日但未滿 3 個月",
              note: "拋棄繼承與限定繼承期限正在接近，應先判斷債務風險。",
              flags: ["三個月期限", "先看債務"],
              actions: ["查詢財產與債務線索", "通知繼承人一起確認是否拋棄或限定繼承", "避免任意處分遺產"],
              documents: ["財產清單", "債務通知", "銀行或保險資料"],
              toolKeys: ["limited-inheritance", "inheritance-timeline"]
            },
            {
              label: "已超過 3 個月",
              note: "仍可處理遺產稅、分割與過戶，但債務風險需要個別判斷。",
              flags: ["期限風險", "建議專業協助"],
              actions: ["確認是否已承認繼承或處分遺產", "整理已收到的債權人通知", "補做遺產稅與分割前置資料"],
              documents: ["債權人通知", "遺產稅資料", "遺產處分紀錄"],
              toolKeys: ["estate-tax-detail", "limited-inheritance"]
            }
          ]
        },
        {
          id: "debt",
          title: "是否知道有債務或保證責任？",
          prompt: "債務狀況會決定是否優先處理拋棄或限定繼承。",
          options: [
            {
              label: "債務大於財產或來源不明",
              note: "不要先動用遺產。應優先評估拋棄或限定繼承。",
              flags: ["高風險", "避免處分遺產"],
              actions: ["暫停提領或分配遺產", "列出已知債權人與金額", "準備法院聲請資料"],
              documents: ["債務通知", "法院或銀行文件", "財產清冊"],
              toolKeys: ["limited-inheritance"]
            },
            {
              label: "目前看起來沒有債務",
              note: "仍建議保留查詢紀錄，後續再進入稅務與分割。",
              flags: ["可進入分配"],
              actions: ["保存查詢資料", "確認是否有信用貸款、保證或票據", "進入遺產稅與分割規劃"],
              documents: ["財產清單", "銀行資料", "稅務資料"],
              toolKeys: ["calculator", "estate-tax-detail"]
            },
            {
              label: "不確定",
              note: "先用保守路線處理。期限內仍要保留拋棄或限定繼承選項。",
              flags: ["資料不足", "先保留選擇"],
              actions: ["向銀行、稅務與家人蒐集線索", "確認是否收到法院或債權人通知", "期限內先評估限定繼承"],
              documents: ["財產清單", "通訊紀錄", "債務線索"],
              toolKeys: ["limited-inheritance", "inheritance-timeline"]
            }
          ]
        },
        {
          id: "assets",
          title: "遺產包含哪些重要財產？",
          prompt: "不動產、保險與股票會牽涉不同文件與稅務處理。",
          options: [
            {
              label: "有不動產",
              note: "需確認謄本、共有狀態、抵押與過戶成本。",
              flags: ["不動產過戶"],
              actions: ["申請土地與建物謄本", "確認是否有抵押、查封或共有", "估算過戶與稅費"],
              documents: ["土地謄本", "建物謄本", "權狀", "稅單"],
              toolKeys: ["real-estate", "estate-tax-detail"]
            },
            {
              label: "有保險或股票",
              note: "要區分受益人、要保人、保單價值與遺產稅資料。",
              flags: ["保單與金融資產"],
              actions: ["確認保單要保人與受益人", "向金融機構申請餘額或持股資料", "整理是否列入遺產稅"],
              documents: ["保單", "金融機構餘額資料", "股票資料"],
              toolKeys: ["insurance-policyholder-death", "estate-tax-detail"]
            },
            {
              label: "主要是存款與動產",
              note: "可先完成繼承人資料與金融機構清單，再規劃分配。",
              flags: ["分配整理"],
              actions: ["列出金融機構與帳戶線索", "取得繼承人印鑑與戶籍資料", "規劃分割協議"],
              documents: ["存款資料", "繼承系統表", "分割協議草稿"],
              toolKeys: ["calculator"]
            }
          ]
        },
        {
          id: "conflict",
          title: "繼承人之間是否已有爭議？",
          prompt: "有爭議時，文件保存與分割順序會比急著過戶更重要。",
          options: [
            {
              label: "大家有共識",
              note: "可進入分割協議、遺產稅與過戶流程。",
              flags: ["可協議處理"],
              actions: ["確認每位繼承人同意內容", "草擬分割協議", "依財產類型安排過戶"],
              documents: ["繼承系統表", "分割協議", "印鑑證明"],
              toolKeys: ["calculator", "estate-tax-detail"]
            },
            {
              label: "有人不同意或失聯",
              note: "先不要只靠口頭承諾。需保留溝通紀錄並評估法院程序。",
              flags: ["分割爭議", "建議諮詢律師"],
              actions: ["保存通知與對話紀錄", "確認爭議財產範圍", "評估遺產分割協議或訴訟"],
              documents: ["通訊紀錄", "財產清單", "繼承人資料"],
              toolKeys: ["calculator"]
            },
            {
              label: "有遺囑、特留分或生前贈與爭議",
              note: "先確認遺囑形式與財產移轉紀錄，再計算可能的特留分。",
              flags: ["遺囑爭議", "特留分"],
              actions: ["檢查遺囑形式", "整理死亡前財產移轉", "初步計算特留分是否受侵害"],
              documents: ["遺囑", "贈與資料", "財產清單", "保單資料"],
              toolKeys: ["forced-share"]
            }
          ]
        }
      ],
      recommendedTools: ["inheritance-timeline", "limited-inheritance", "calculator", "estate-tax-detail"]
    }
  },
  {
    id: "renounce-or-limited-inheritance",
    status: "重點整理",
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
    status: "重點整理",
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
    status: "引導式",
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
    nextSteps: ["列財產與子女需求", "先檢核協議內容", "再評估是否談判或進入法院程序"],
    guidedFlow: {
      intro: "先看離婚談到哪一步，再整理財產、子女與安全風險。目標是讓協議少留後患。",
      steps: [
        {
          id: "status",
          title: "目前是否已談好離婚？",
          prompt: "離婚合意程度會影響後續路線：先補協議、準備談判，或進入法院程序。",
          options: [
            {
              label: "已談好，準備簽協議",
              note: "簽名前要檢查財產、子女、扶養費與債務是否寫完整。",
              flags: ["協議檢核"],
              actions: ["逐條檢查離婚協議", "把財產與子女安排寫成可執行文字", "確認證人與登記需求"],
              documents: ["離婚協議草稿", "戶籍資料", "子女資料"],
              toolKeys: ["divorce-agreement"]
            },
            {
              label: "想離婚，但尚未談成",
              note: "先整理可談項目與底線，再決定協商或調解。",
              flags: ["談判準備"],
              actions: ["列出財產、債務、子女與居住安排", "設定可接受與不可接受條件", "保留溝通紀錄"],
              documents: ["財產清單", "債務資料", "通訊紀錄"],
              toolKeys: ["property-split", "child-support"]
            },
            {
              label: "對方不同意離婚",
              note: "需評估法定離婚事由與證據，不宜只用口頭爭執推進。",
              flags: ["法院程序可能"],
              actions: ["整理婚姻破裂事由與證據", "確認是否有暴力、外遇或重大衝突", "評估調解或訴訟"],
              documents: ["通訊紀錄", "照片或錄音資料", "報案或保護令資料"],
              toolKeys: ["divorce-damages"]
            }
          ]
        },
        {
          id: "property",
          title: "婚後財產與債務能否列出？",
          prompt: "剩餘財產分配要先有財產基準，資料不足時不宜直接放棄。",
          options: [
            {
              label: "雙方財產大致清楚",
              note: "可先估算剩餘財產分配，再回頭調整協議文字。",
              flags: ["可先試算"],
              actions: ["列出婚後財產與債務", "區分婚前與婚後取得", "初步計算差額"],
              documents: ["存款資料", "不動產資料", "貸款資料"],
              toolKeys: ["property-split"]
            },
            {
              label: "對方不提供財產資料",
              note: "先保存線索與異常移轉紀錄，必要時透過程序調查。",
              flags: ["財產不透明"],
              actions: ["保存對方拒絕提供資料的紀錄", "列出已知財產線索", "避免在資訊不足時簽放棄條款"],
              documents: ["通訊紀錄", "財產線索", "交易或移轉紀錄"],
              toolKeys: ["property-split"]
            },
            {
              label: "沒有明顯財產爭議",
              note: "仍要確認債務、保單與退休金等容易漏列項目。",
              flags: ["避免漏列"],
              actions: ["確認共同債務與保單", "確認婚後儲蓄與投資", "協議中寫明財產結清範圍"],
              documents: ["保單", "貸款資料", "帳戶資料"],
              toolKeys: ["divorce-agreement"]
            }
          ]
        },
        {
          id: "children",
          title: "是否有未成年子女？",
          prompt: "有子女時，親權、居住、扶養費與探視安排要一併處理。",
          options: [
            {
              label: "有，且照顧安排未定",
              note: "先整理主要照顧者、支出與探視需求。",
              flags: ["子女安排"],
              actions: ["列出子女日常支出", "整理主要照顧紀錄", "草擬探視與接送安排"],
              documents: ["子女支出資料", "就學資料", "照顧紀錄"],
              toolKeys: ["child-support"]
            },
            {
              label: "有，雙方已有初步共識",
              note: "把共識寫成具體可執行內容，避免只寫概括文字。",
              flags: ["協議文字"],
              actions: ["寫明扶養費金額與給付日", "寫明探視時間與交接方式", "保留未來調整條款"],
              documents: ["扶養費明細", "探視安排草稿", "離婚協議草稿"],
              toolKeys: ["child-support", "divorce-agreement"]
            },
            {
              label: "沒有未成年子女",
              note: "可把重點放在財產、債務、贍養費與協議完整性。",
              flags: ["聚焦財產"],
              actions: ["檢查財產與債務條款", "評估是否涉及贍養費", "確認協議簽署與登記流程"],
              documents: ["財產清單", "債務資料", "協議草稿"],
              toolKeys: ["alimony", "divorce-agreement"]
            }
          ]
        },
        {
          id: "safety",
          title: "是否有暴力、騷擾或重大壓力？",
          prompt: "安全風險存在時，處理順序要先保護人身與子女，再談財產。",
          options: [
            {
              label: "有當下安全疑慮",
              note: "先保留證據並尋求保護令、警政或社政協助。",
              flags: ["安全優先", "高風險"],
              actions: ["保存受傷、恐嚇與騷擾證據", "必要時報案或申請保護令", "安排安全住所與子女保護"],
              documents: ["驗傷單", "報案紀錄", "訊息截圖", "保護令資料"],
              toolKeys: ["divorce-damages"]
            },
            {
              label: "沒有安全疑慮，但衝突高",
              note: "建議以書面溝通與調解方式降低誤解。",
              flags: ["高衝突"],
              actions: ["改用文字記錄重要溝通", "避免單獨談重大條件", "準備調解資料"],
              documents: ["通訊紀錄", "條件清單", "財產與子女資料"],
              toolKeys: ["divorce-agreement"]
            },
            {
              label: "目前可以理性協商",
              note: "可依協議檢核、財產試算與子女安排順序推進。",
              flags: ["可協議"],
              actions: ["先完成試算", "再修協議文字", "最後確認登記與履行方式"],
              documents: ["試算結果", "協議草稿", "戶政資料"],
              toolKeys: ["property-split", "divorce-agreement"]
            }
          ]
        }
      ],
      recommendedTools: ["property-split", "child-support", "divorce-agreement"]
    }
  },
  {
    id: "child-support-adjustment",
    status: "重點整理",
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
    status: "引導式",
    category: "勞動與職場",
    title: "被資遣或遭解雇",
    summary: "協助你判斷解雇理由、年資、資遣費、預告工資、調解路徑與應保存文件。",
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
    nextSteps: ["保留書面證據", "試算資遣與預告金額", "確認解雇理由", "準備調解資料"],
    guidedFlow: {
      intro: "先確認公司用什麼理由讓你離職，再整理金額、文件與可走的調解路徑。",
      steps: [
        {
          id: "notice",
          title: "公司如何通知你離職？",
          prompt: "通知方式與理由會影響解雇是否合法，以及後續要主張的項目。",
          options: [
            {
              label: "有書面資遣通知",
              note: "先確認資遣理由、日期、預告期間與是否給非自願離職證明。",
              flags: ["資遣檢核"],
              actions: ["保存資遣通知", "確認離職日與預告期間", "要求非自願離職證明"],
              documents: ["資遣通知", "非自願離職證明", "勞動契約"],
              toolKeys: ["severance", "notice-calc"]
            },
            {
              label: "口頭叫我不用來",
              note: "先要求公司以書面說明理由，並保存對話紀錄。",
              flags: ["書面不足", "高風險"],
              actions: ["用訊息或 Email 請公司確認離職理由與日期", "不要自行寫離職申請", "保留排班、打卡與對話紀錄"],
              documents: ["通訊紀錄", "出勤紀錄", "薪資單"],
              toolKeys: ["wrongful-dismissal"]
            },
            {
              label: "公司要求我自己離職",
              note: "若不是自願，不宜簽自願離職或切結文件。",
              flags: ["逼退風險"],
              actions: ["暫緩簽署自願離職文件", "記錄公司要求離職的原因與過程", "確認是否仍可提供勞務"],
              documents: ["離職文件草稿", "通訊紀錄", "工作紀錄"],
              toolKeys: ["wrongful-dismissal"]
            }
          ]
        },
        {
          id: "reason",
          title: "公司提出的理由是什麼？",
          prompt: "不同理由對應不同程序與舉證責任。",
          options: [
            {
              label: "業務縮減、虧損或組織調整",
              note: "常見於資遣。需檢查必要性、選擇標準與金額給付。",
              flags: ["資遣理由"],
              actions: ["確認資遣理由是否具體", "試算資遣費與預告工資", "整理年資與平均工資"],
              documents: ["資遣通知", "薪資單", "年資資料"],
              toolKeys: ["severance", "notice-calc"]
            },
            {
              label: "說我表現不好或違規",
              note: "需看是否有改善機會、懲戒紀錄與解雇比例原則。",
              flags: ["不當解雇可能"],
              actions: ["保存績效考核與主管回饋", "整理公司過去是否曾警告或改善通知", "檢查解雇是否過重"],
              documents: ["考核資料", "警告紀錄", "工作成果"],
              toolKeys: ["wrongful-dismissal"]
            },
            {
              label: "理由不明或前後不一",
              note: "解雇理由不明時，應先補足書面資料再談金額。",
              flags: ["理由不明"],
              actions: ["要求公司書面說明解雇依據", "保存不同版本說法", "準備勞資爭議調解資料"],
              documents: ["通訊紀錄", "會議紀錄", "薪資與出勤資料"],
              toolKeys: ["wrongful-dismissal", "dispute-guide"]
            }
          ]
        },
        {
          id: "payment",
          title: "公司是否已給付資遣費或預告工資？",
          prompt: "金額不足時，調解前要先整理計算基礎。",
          options: [
            {
              label: "已給，但不知道是否正確",
              note: "以到職日、離職日與平均工資重新試算。",
              flags: ["金額檢查"],
              actions: ["整理最近 6 個月薪資", "輸入年資與離職日試算", "比對公司給付明細"],
              documents: ["薪資單", "給付明細", "到離職資料"],
              toolKeys: ["severance", "notice-calc"]
            },
            {
              label: "尚未給或少給",
              note: "先列出請求項目，再以書面向公司確認。",
              flags: ["欠款爭議"],
              actions: ["列出資遣費、預告工資、工資與特休折現", "以書面要求公司說明付款日", "準備調解申請"],
              documents: ["薪資單", "特休資料", "公司回覆"],
              toolKeys: ["severance", "notice-calc", "dispute-guide"]
            },
            {
              label: "公司要求簽完才給",
              note: "簽署前要檢查是否有放棄權利、保密或不得爭執條款。",
              flags: ["文件風險"],
              actions: ["先索取完整文件", "檢查是否放棄加班費或解雇爭議", "保留修改或拒簽空間"],
              documents: ["切結書", "和解書", "給付明細"],
              toolKeys: ["dispute-guide"]
            }
          ]
        },
        {
          id: "goal",
          title: "你現在想達成什麼結果？",
          prompt: "不同目標會影響是談金額、申請調解，還是主張僱傭關係存在。",
          options: [
            {
              label: "拿到應有金額",
              note: "以金額明細為主，先準備調解用表格。",
              flags: ["金額請求"],
              actions: ["完成資遣與預告工資試算", "整理公司短付項目", "準備調解陳述"],
              documents: ["試算結果", "薪資資料", "調解申請資料"],
              toolKeys: ["severance", "dispute-guide"]
            },
            {
              label: "確認解雇是否合法",
              note: "需聚焦解雇理由、程序與公司舉證。",
              flags: ["解雇效力"],
              actions: ["整理解雇前後所有通知", "比對公司理由與事實", "評估是否主張不當解雇"],
              documents: ["解雇通知", "考核或懲戒資料", "通訊紀錄"],
              toolKeys: ["wrongful-dismissal"]
            },
            {
              label: "想先談，不想上法院",
              note: "可先走勞資爭議調解，但仍要把證據與金額整理完整。",
              flags: ["調解路線"],
              actions: ["列出可接受方案", "準備調解申請", "保留談判紀錄"],
              documents: ["調解資料", "金額明細", "公司通知"],
              toolKeys: ["dispute-guide"]
            }
          ]
        }
      ],
      recommendedTools: ["wrongful-dismissal", "severance", "notice-calc", "dispute-guide"]
    }
  },
  {
    id: "unpaid-wages-overtime",
    status: "重點整理",
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
    status: "重點整理",
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
    status: "重點整理",
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
    status: "引導式",
    category: "車禍與損害賠償",
    title: "車禍後的處理與賠償",
    summary: "從傷亡嚴重度、保險協助、肇責資料到和解風險，整理車禍後要先做的事。",
    firstQuestions: ["是否有人受傷、重傷或死亡？", "你或對方是否有保險公司協助？", "是否已報案並取得事故資料？", "是否已有人提出和解金額？"],
    riskSignals: ["有人重傷或死亡", "沒有保險協助且肇責不明", "對方催促盡快和解", "未保存醫療、維修或工作損失資料"],
    deadlines: ["刑事告訴與民事請求均有期限，應依傷害類型確認"],
    documents: ["報案資料", "事故初判表", "現場照片或行車紀錄器", "診斷證明或驗傷資料", "維修估價單", "保險聯繫紀錄"],
    tools: [
      { label: "車禍賠償試算", href: "https://inheritance.choulegal.com/accident.html" },
      { label: "看護費試算", href: "https://inheritance.choulegal.com/caregiver.html" },
      { label: "和解金試算", href: "https://inheritance.choulegal.com/settlement-calc.html" }
    ],
    experts: ["律師", "保險理賠人員"],
    nextSteps: ["先確認傷亡嚴重度", "確認是否有保險協助", "整理事故與損害證據", "避免過早簽和解"],
    guidedFlow: {
      intro: "先判斷事故嚴重度，再確認有沒有保險協助。頁面會依你的答案整理要報案、要保存、要準備求償的資料。",
      steps: [
        {
          id: "severity",
          title: "這次車禍的嚴重程度？",
          prompt: "先判斷人身風險。只有車損、有人受傷、重傷或死亡，後續處理順序不同。",
          options: [
            {
              label: "只有車損或財物損害",
              note: "先保留現場、車損照片與維修估價，後續重點會放在肇責與修復費用。",
              flags: ["財損", "可先整理金額"],
              actions: ["拍攝車損、路口、號誌、煞車痕與現場位置", "取得維修估價單或發票", "保留拖吊、交通替代或其他支出紀錄"],
              documents: ["現場照片", "行車紀錄器影片", "維修估價單", "事故資料"],
              toolKeys: ["settlement-calc"]
            },
            {
              label: "有人受傷但無生命危險",
              note: "先就醫並保留診斷證明、醫療收據、請假與薪資損失資料。",
              flags: ["受傷", "醫療證明"],
              actions: ["就醫並請醫師記載受傷部位", "每次回診保留診斷證明與收據", "整理請假紀錄與薪資減少證明"],
              documents: ["診斷證明", "醫療收據", "請假紀錄", "薪資證明"],
              toolKeys: ["accident"]
            },
            {
              label: "有人重傷、住院或死亡",
              note: "先處理救護、報案與家屬聯繫。金額與和解不宜太早決定。",
              flags: ["高風險", "建議專業協助"],
              actions: ["確認救護與報案紀錄", "保存完整病歷、住院、看護與支出資料", "在傷勢或責任未穩定前暫緩簽和解書"],
              documents: ["報案資料", "完整病歷", "住院或死亡相關證明", "看護紀錄", "家屬支出紀錄"],
              toolKeys: ["accident", "caregiver"]
            }
          ]
        },
        {
          id: "insurance",
          title: "你或對方有保險公司協助嗎？",
          prompt: "有保險時，理賠人員通常會協助文件與協商；沒有保險時，要自己把求償資料整理完整。",
          options: [
            {
              label: "我方有保險協助",
              note: "先通知保險公司並取得理賠窗口，後續溝通盡量留下書面紀錄。",
              flags: ["我方保險", "保留通訊紀錄"],
              actions: ["通知保險公司並取得案件編號", "確認強制險、任意險或第三責任險範圍", "把報案資料、照片、診斷或估價資料交給理賠窗口"],
              documents: ["保單或保險證", "理賠案件編號", "報案資料", "照片與收據", "理賠窗口聯繫紀錄"],
              toolKeys: ["accident", "settlement-calc"]
            },
            {
              label: "對方有保險協助",
              note: "可以和對方保險公司聯繫，但仍要自己保存完整證據與求償明細。",
              flags: ["對方保險", "自行保存證據"],
              actions: ["取得對方保險公司與理賠人員資訊", "提供資料前先留存副本", "不要只依口頭說法決定和解金額"],
              documents: ["對方保險公司資訊", "理賠人員聯繫紀錄", "事故資料", "損害明細", "收據與證明"],
              toolKeys: ["accident", "settlement-calc"]
            },
            {
              label: "目前沒有保險協助",
              note: "要自行整理請求賠償資料。先把事故、責任、金額與證據分開放好。",
              flags: ["無保險協助", "自行求償"],
              actions: ["建立一份損害明細表", "把每個請求金額對應到照片、收據或證明", "優先取得事故初判表或其他肇責資料"],
              documents: ["事故初判表或報案資料", "現場照片與行車紀錄器", "維修估價單或發票", "診斷證明與醫療收據", "薪資或請假證明", "雙方聯絡資料"],
              toolKeys: ["accident", "settlement-calc"]
            }
          ]
        },
        {
          id: "liability",
          title: "事故責任目前明確嗎？",
          prompt: "責任還不明確時，先補事故資料。不要只用雙方口頭比例談金額。",
          options: [
            {
              label: "已有初判表或明確肇責",
              note: "可先依肇責比例估算求償區間。",
              flags: ["可估算區間"],
              actions: ["把全部損害項目加總", "依肇責比例調整求償金額", "準備一版談判用明細"],
              documents: ["事故初判表", "損害明細", "收據與證明"],
              toolKeys: ["accident", "settlement-calc"]
            },
            {
              label: "還沒有初判表或事故資料",
              note: "先取得警方資料，再進入金額協商。",
              flags: ["先補資料"],
              actions: ["向警方確認事故資料申請方式", "先整理現場證據，不急著接受固定比例", "和對方或保險公司聯繫時留下書面紀錄"],
              documents: ["報案資料", "事故現場圖", "現場照片與影片", "雙方聯絡紀錄"],
              toolKeys: []
            },
            {
              label: "雙方對肇責有爭議",
              note: "應保存證據並評估鑑定或調解，不宜只用口頭比例談和解。",
              flags: ["肇責爭議", "建議專業協助"],
              actions: ["整理雙方主張與證據差異", "評估是否申請鑑定或調解", "不要用未確認比例簽終局和解"],
              documents: ["事故圖", "照片與影片", "初判表", "雙方通訊紀錄"],
              toolKeys: ["settlement-calc"]
            }
          ]
        },
        {
          id: "settlement",
          title: "對方或保險公司是否催促和解？",
          prompt: "和解書通常會影響後續請求。簽署前應確認損害項目是否完整。",
          options: [
            {
              label: "尚未談和解",
              note: "先完成損害項目整理，再決定談判順序。",
              flags: ["整理清單"],
              actions: ["先建立損害明細", "把每個金額連到一份證據", "決定最低可接受區間前先完成試算"],
              documents: ["損害明細", "收據", "診斷證明", "薪資資料"],
              toolKeys: ["accident"]
            },
            {
              label: "已有和解金額",
              note: "先用和解金試算檢查項目是否漏列，不急著簽署。",
              flags: ["檢查和解"],
              actions: ["比對對方金額是否包含全部損害", "檢查是否有放棄刑民事請求或保險請求", "先留下修改意見再回覆"],
              documents: ["和解金額明細", "和解書草稿", "損害明細"],
              toolKeys: ["settlement-calc"]
            },
            {
              label: "已被要求簽和解書",
              note: "若傷勢未穩定或肇責有爭議，建議先暫緩並尋求專業意見。",
              flags: ["高風險", "暫緩簽署"],
              actions: ["先不要簽空白或一次性放棄文件", "確認文字是否包含後續不得請求", "如傷勢未穩定，先請專業人士看過和解書"],
              documents: ["和解書全文", "醫療進度資料", "肇責資料", "對方催促紀錄"],
              toolKeys: ["settlement-calc"]
            }
          ]
        }
      ],
      recommendedTools: ["accident", "caregiver", "settlement-calc"]
    }
  },
  {
    id: "general-damages-or-settlement",
    status: "重點整理",
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
    status: "引導式",
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
    nextSteps: ["先確認是否在期限內", "保存商品與對話證據", "書面通知退貨", "必要時申訴或信用卡爭議款"],
    guidedFlow: {
      intro: "先確認期限、商品類型與商家回應。能退就走退貨路線，退不了就整理申訴資料。",
      steps: [
        {
          id: "date",
          title: "收到商品多久了？",
          prompt: "七日鑑賞期通常從收受商品後起算，日期是第一個判斷點。",
          options: [
            {
              label: "7 日內",
              note: "先保留退貨權利，盡快以可留存紀錄的方式通知商家。",
              flags: ["期限內"],
              actions: ["截圖訂單與到貨日期", "用客服、Email 或平台訊息提出退貨", "保留寄回或取件紀錄"],
              documents: ["訂單資料", "物流紀錄", "退貨通知"],
              toolKeys: []
            },
            {
              label: "超過 7 日",
              note: "仍可判斷是否有瑕疵、廣告不實或契約爭議。",
              flags: ["鑑賞期外"],
              actions: ["檢查商品是否有瑕疵或與說明不符", "整理商家承諾與實品差異", "改走瑕疵或申訴路線"],
              documents: ["商品照片", "廣告截圖", "客服對話"],
              toolKeys: []
            },
            {
              label: "不確定收貨日期",
              note: "先找物流、取件通知或平台紀錄，避免錯估期限。",
              flags: ["先補日期"],
              actions: ["查詢物流簽收或超商取件時間", "截圖平台訂單狀態", "先向商家發出退貨通知保留紀錄"],
              documents: ["物流紀錄", "平台訂單", "退貨通知截圖"],
              toolKeys: []
            }
          ]
        },
        {
          id: "goods",
          title: "商品是否可能排除鑑賞期？",
          prompt: "部分商品因性質、客製化或衛生因素，退貨條件會不同。",
          options: [
            {
              label: "一般網購商品",
              note: "可先依鑑賞期方向處理，但仍要保持商品完整。",
              flags: ["一般退貨"],
              actions: ["保留外盒、配件與贈品", "不要超出檢查必要範圍使用商品", "要求商家說明退貨流程"],
              documents: ["商品照片", "包裝照片", "客服對話"],
              toolKeys: []
            },
            {
              label: "客製、易腐、個人衛生或數位內容",
              note: "可能有排除鑑賞期問題，要改查商家告知是否充分。",
              flags: ["例外商品"],
              actions: ["確認商品頁是否事前明確告知排除退貨", "保存購買前頁面截圖", "評估是否有瑕疵或說明不實"],
              documents: ["商品頁截圖", "購買紀錄", "瑕疵照片"],
              toolKeys: []
            },
            {
              label: "商品有瑕疵或與說明不符",
              note: "即使鑑賞期有爭議，仍可整理瑕疵救濟或廣告不實資料。",
              flags: ["瑕疵爭議"],
              actions: ["拍攝瑕疵與開箱狀態", "保存廣告或商品規格", "書面要求修補、換貨、減價或退費"],
              documents: ["瑕疵照片", "開箱影片", "廣告截圖", "客服對話"],
              toolKeys: []
            }
          ]
        },
        {
          id: "merchant",
          title: "是否已通知商家退貨或退費？",
          prompt: "沒有書面通知時，後續很難證明你已在期限內主張權利。",
          options: [
            {
              label: "已通知，商家同意",
              note: "下一步是保存退貨物流與退款時程。",
              flags: ["進入退款"],
              actions: ["確認寄回方式與運費負擔", "保存寄件或取件紀錄", "追蹤退款期限"],
              documents: ["退貨同意紀錄", "寄件單", "退款紀錄"],
              toolKeys: []
            },
            {
              label: "已通知，但商家拒絕",
              note: "要求商家提出拒絕理由，準備申訴或爭議款。",
              flags: ["拒退爭議"],
              actions: ["請商家書面說明拒絕原因", "整理法律上退貨或瑕疵理由", "準備消保申訴資料"],
              documents: ["拒絕紀錄", "訂單與付款資料", "商品證據"],
              toolKeys: []
            },
            {
              label: "尚未通知",
              note: "先用可截圖保存的方式通知，不要只靠電話。",
              flags: ["先補通知"],
              actions: ["儘快用平台訊息或 Email 通知", "文字中寫明訂單、商品與請求", "保存送出時間"],
              documents: ["通知截圖", "訂單資料", "付款紀錄"],
              toolKeys: []
            }
          ]
        },
        {
          id: "payment",
          title: "付款方式是什麼？",
          prompt: "信用卡、平台付款與轉帳的後續處理路徑不同。",
          options: [
            {
              label: "信用卡或第三方支付",
              note: "商家拒退時，可同步準備爭議款或平台申訴。",
              flags: ["爭議款可能"],
              actions: ["查詢發卡銀行爭議款期限", "向平台提出申訴", "保留商家拒退證據"],
              documents: ["信用卡帳單", "平台交易紀錄", "拒退紀錄"],
              toolKeys: []
            },
            {
              label: "轉帳或匯款",
              note: "需強化商家資訊、付款證明與書面催告。",
              flags: ["催告路線"],
              actions: ["保存匯款帳號與商家資訊", "寄出書面催告或平台申訴", "評估是否涉及詐騙或小額訴訟"],
              documents: ["匯款紀錄", "商家資料", "催告內容"],
              toolKeys: []
            },
            {
              label: "貨到付款或超商付款",
              note: "先確認平台或物流是否保留款項處理機制。",
              flags: ["平台申訴"],
              actions: ["查詢平台退款規則", "保存付款與取貨紀錄", "向平台客服提出爭議"],
              documents: ["付款收據", "物流紀錄", "平台客服紀錄"],
              toolKeys: []
            }
          ]
        }
      ],
      recommendedTools: []
    }
  },
  {
    id: "fitness-travel-tuition-refund",
    status: "引導式",
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
    status: "資料整理中",
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
    status: "引導式",
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
    nextSteps: ["保存房況與通知紀錄", "要求扣款明細", "確認租約約定", "必要時申請調解"],
    guidedFlow: {
      intro: "先分辨是押金、修繕還是退租爭議。頁面會整理要通知、要拍照、要保存的資料。",
      steps: [
        {
          id: "issue",
          title: "目前主要爭議是什麼？",
          prompt: "押金、修繕與提前解約的處理順序不同，先選最接近的狀況。",
          options: [
            {
              label: "房東不退押金或亂扣款",
              note: "先要求扣款明細，並用點交與照片對照。",
              flags: ["押金爭議"],
              actions: ["要求房東提出扣款明細", "比對入住與退租照片", "整理押金金額與退租日期"],
              documents: ["押金收據", "點交紀錄", "房況照片", "扣款明細"],
              toolKeys: []
            },
            {
              label: "房屋需要修繕",
              note: "先保存瑕疵與通知紀錄，確認是否影響居住安全。",
              flags: ["修繕通知"],
              actions: ["拍攝漏水、壁癌、設備故障或危險狀態", "以書面通知房東修繕", "必要時估價並保留報價"],
              documents: ["照片或影片", "修繕通知", "估價單"],
              toolKeys: []
            },
            {
              label: "提前解約或被要求搬走",
              note: "先查租約解約條款與通知期限，不要只憑口頭搬離。",
              flags: ["解約爭議"],
              actions: ["檢查租約提前解約條款", "保存房東要求搬離的訊息", "計算可能違約金與押金返還"],
              documents: ["租約", "解約通知", "通訊紀錄"],
              toolKeys: []
            }
          ]
        },
        {
          id: "contract",
          title: "手上是否有租約與押金證明？",
          prompt: "沒有租約不代表不能主張，但證據整理會更重要。",
          options: [
            {
              label: "有完整租約與收據",
              note: "可直接依約定檢查押金、修繕與解約條款。",
              flags: ["文件完整"],
              actions: ["標出押金、修繕與解約條款", "整理租期與租金紀錄", "比對房東主張是否符合租約"],
              documents: ["租約", "押金收據", "租金匯款紀錄"],
              toolKeys: []
            },
            {
              label: "只有部分紀錄",
              note: "用匯款、對話、入住照片補強租賃關係。",
              flags: ["補強證據"],
              actions: ["整理租金匯款紀錄", "保存與房東的對話", "找出入住或點交照片"],
              documents: ["匯款紀錄", "通訊紀錄", "入住照片"],
              toolKeys: []
            },
            {
              label: "幾乎沒有文件",
              note: "先補足身分、地址、租金與押金的基本證據。",
              flags: ["證據不足"],
              actions: ["整理房東姓名、地址與聯絡方式", "保存付款紀錄或證人資料", "以書面重新確認租賃事實"],
              documents: ["付款紀錄", "對話截圖", "租屋地址資料"],
              toolKeys: []
            }
          ]
        },
        {
          id: "evidence",
          title: "是否已有房況照片或通知紀錄？",
          prompt: "租屋爭議常輸在證據。照片與通知時間會影響可請求內容。",
          options: [
            {
              label: "有入住與退租照片",
              note: "可用前後對照區分自然耗損與可歸責損壞。",
              flags: ["可比對房況"],
              actions: ["把照片依日期分類", "標出自然耗損與新損壞差異", "搭配點交紀錄要求退還押金"],
              documents: ["入住照片", "退租照片", "點交紀錄"],
              toolKeys: []
            },
            {
              label: "只有爭議發生後照片",
              note: "仍可保存現況，但要補充對話與維修資料。",
              flags: ["證據可補"],
              actions: ["儘快補拍全景與細節照片", "保存通知房東的時間", "取得修繕估價或第三方說明"],
              documents: ["現況照片", "修繕通知", "估價單"],
              toolKeys: []
            },
            {
              label: "目前沒有照片",
              note: "先補拍現況，並避免在未記錄前丟棄或修復爭議物。",
              flags: ["儘快補證據"],
              actions: ["拍攝全屋、爭議處與設備編號", "用書面通知房東共同點交", "保留鑰匙交還或搬離紀錄"],
              documents: ["現況照片", "通知紀錄", "點交紀錄"],
              toolKeys: []
            }
          ]
        },
        {
          id: "response",
          title: "房東目前如何回應？",
          prompt: "房東拒絕、拖延或自力救濟時，下一步不同。",
          options: [
            {
              label: "願意協商",
              note: "把協商結果寫成文字，列明付款日期與點交內容。",
              flags: ["可協商"],
              actions: ["整理雙方同意內容", "寫明退押金或修繕期限", "保存轉帳與點交紀錄"],
              documents: ["協議文字", "轉帳紀錄", "點交表"],
              toolKeys: []
            },
            {
              label: "拒絕或拖延",
              note: "先發出書面催告，再準備調解資料。",
              flags: ["調解準備"],
              actions: ["用訊息、Email 或存證信函催告", "列出請求金額與理由", "準備向地方調解或租賃爭議管道申請"],
              documents: ["催告內容", "金額明細", "租約與證據"],
              toolKeys: []
            },
            {
              label: "斷水斷電、換鎖或擅入",
              note: "這類自力救濟風險高，應先保存證據並尋求即時協助。",
              flags: ["高風險", "即時協助"],
              actions: ["拍攝斷水斷電、換鎖或擅入證據", "必要時報警或向地方政府求助", "不要單獨與房東衝突"],
              documents: ["照片或影片", "報案紀錄", "房東通知"],
              toolKeys: []
            }
          ]
        }
      ],
      recommendedTools: []
    }
  },
  {
    id: "property-purchase-or-title-risk",
    status: "重點整理",
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
    status: "重點整理",
    category: "債務與金錢",
    title: "被追債、支付命令與強制執行",
    summary: "處理債務確認、時效、利息、支付命令異議與執行風險。",
    firstQuestions: ["是否真的欠款？", "是否收到法院文件？", "債務發生日期與最後付款日期為何？", "利息或違約金是否過高？"],
    riskSignals: ["收到支付命令但未處理", "時效可能已完成", "利息或費用不明", "帳戶或薪資可能被執行"],
    deadlines: ["支付命令異議有短期法定期間，收到文件後應儘快確認"],
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
    status: "資料整理中",
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
    status: "重點整理",
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
    status: "資料整理中",
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
    status: "重點整理",
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
    status: "資料整理中",
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
    status: "資料整理中",
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
