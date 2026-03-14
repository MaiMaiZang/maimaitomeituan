const state = {
  currentSchoolId: "a",
  currentView: "map-view",
  filters: {
    quick: "评分最高",
    cuisines: [],
    price: [],
    status: [],
    tags: []
  },
  mapTypeFilter: null,
  searchQuery: "",
  currentDetailId: null,
  favorites: [],
  favoriteFolder: "全部",
  mapRange: 200,
  checkins: [],
  favoriteView: "list",
  folders: ["想吃", "去过", "二刷餐厅"],
  favoriteManageMode: false,
  favoriteSelection: [],
  favoriteFilter: { want: true, done: true, custom: true },
  folderIcons: { "想吃": "❤️", "去过": "✅", "二刷餐厅": "📁" }
}

const userPinPositions = {
  a: { left: "12%", top: "28%" },
  b: { left: "44%", top: "52%" },
  c: { left: "26%", top: "36%" },
  d: { left: "60%", top: "40%" },
  e: { left: "18%", top: "54%" }
}

const schools = [
  { id: "a", name: "A大", radius: "1.5km" },
  { id: "b", name: "B大", radius: "1.2km" },
  { id: "c", name: "C大", radius: "1.8km" },
  { id: "d", name: "D大", radius: "1.4km" },
  { id: "e", name: "E大", radius: "1.6km" },
]

const restaurants = [
  {
    id: "r1",
    name: "川味小馆",
    type: "正餐",
    rating: 4.7,
    price: 28,
    distance: 380,
    tags: ["本校同学推荐", "学生优惠", "适合聚餐"],
    cuisine: "川菜",
    status: "正在营业",
    benefit: "凭学生证享 9 折 · 周三套餐立减 5 元",
    dishes: ["辣子鸡 32人推荐", "毛血旺 21人推荐", "酸辣土豆丝 18人推荐"],
    reviews: [
      { user: "A大·小夏", content: "味道很正宗，分量足，周三确实便宜。" },
      { user: "A大·豆豆", content: "人均 30 左右，性价比很高。" }
    ],
    marker: { left: "38%", top: "45%" },
    schools: ["a", "e"]
  },
  {
    id: "r2",
    name: "清晨豆花",
    type: "快餐",
    rating: 4.5,
    price: 16,
    distance: 210,
    tags: ["深夜营业", "适合自习"],
    cuisine: "快餐",
    status: "深夜营业",
    benefit: "学生套餐 12 元起",
    dishes: ["香辣豆花 18人推荐", "红糖糍粑 10人推荐"],
    reviews: [
      { user: "B大·城南", content: "宵夜首选，口味清爽。" }
    ],
    marker: { left: "62%", top: "30%" },
    schools: ["b"]
  },
  {
    id: "r3",
    name: "甜点工坊",
    type: "饮品",
    rating: 4.6,
    price: 22,
    distance: 520,
    tags: ["可送餐", "有套餐"],
    cuisine: "甜品",
    status: "正在营业",
    benefit: "学生第二杯半价",
    dishes: ["抹茶千层 26人推荐", "草莓杯 19人推荐"],
    reviews: [
      { user: "C大·安安", content: "打卡必去，拍照好看。" }
    ],
    marker: { left: "25%", top: "60%" },
    schools: ["c"]
  },
  {
    id: "r4",
    name: "日料合伙人",
    type: "正餐",
    rating: 4.3,
    price: 42,
    distance: 860,
    tags: ["适合约饭", "有包间"],
    cuisine: "日料",
    status: "正在营业",
    benefit: "凭学生证享 88 折",
    dishes: ["鳗鱼饭 14人推荐", "寿司拼盘 22人推荐"],
    reviews: [
      { user: "D大·小明", content: "环境好，适合小聚。" }
    ],
    marker: { left: "70%", top: "65%" },
    schools: ["d"]
  },
  {
    id: "r5",
    name: "校园烧烤档",
    type: "快餐",
    rating: 4.4,
    price: 25,
    distance: 140,
    tags: ["夜宵", "学生优惠"],
    cuisine: "烧烤",
    status: "深夜营业",
    benefit: "学生第二份半价",
    dishes: ["烤鸡翅 40人推荐", "烤茄子 28人推荐"],
    reviews: [
      { user: "A大·阿玖", content: "夜里人很多，味道不错。" }
    ],
    marker: { left: "48%", top: "18%" },
    schools: ["a", "e"]
  },
  {
    id: "r6",
    name: "轻食研究所",
    type: "正餐",
    rating: 4.2,
    price: 35,
    distance: 980,
    tags: ["低卡", "适合自习"],
    cuisine: "轻食",
    status: "正在营业",
    benefit: "学生会员每周 1 次免配送",
    dishes: ["鸡胸沙拉 16人推荐", "谷物碗 12人推荐"],
    reviews: [
      { user: "B大·可乐", content: "健身党友好，配料新鲜。" }
    ],
    marker: { left: "18%", top: "28%" },
    schools: ["b"]
  },
  {
    id: "r7",
    name: "茶千道",
    type: "饮品",
    rating: 4.4,
    price: 16,
    distance: 260,
    tags: ["奶茶", "学生优惠", "可送餐"],
    cuisine: "奶茶",
    status: "正在营业",
    benefit: "学生第二杯半价",
    dishes: ["黑糖珍珠奶茶 22人推荐", "抹茶拿铁 12人推荐"],
    reviews: [
      { user: "A大·小芒", content: "奶香浓郁，排队也很快。" }
    ],
    marker: { left: "52%", top: "42%" },
    schools: ["a", "b"]
  },
  {
    id: "r8",
    name: "星久客",
    type: "饮品",
    rating: 4.5,
    price: 28,
    distance: 430,
    tags: ["咖啡", "自习", "有套餐"],
    cuisine: "咖啡",
    status: "正在营业",
    benefit: "凭学生证享 9 折 · 加 5 元配曲奇",
    dishes: ["美式 18人推荐", "拿铁 21人推荐"],
    reviews: [
      { user: "C大·北川", content: "环境安静，有插座，适合长时间自习。" }
    ],
    marker: { left: "34%", top: "54%" },
    schools: ["c", "d"]
  },
  {
    id: "r9",
    name: "铁姐大排档",
    type: "正餐",
    rating: 4.3,
    price: 38,
    distance: 780,
    tags: ["聚会", "适合聚餐", "学生优惠"],
    cuisine: "烧烤",
    status: "正在营业",
    benefit: "3 人以上赠烤韭菜 · 学生 95 折",
    dishes: ["烤生蚝 25人推荐", "啤酒鸭 14人推荐"],
    reviews: [
      { user: "D大·团长", content: "人多热闹，适合聚会，量大管饱。" }
    ],
    marker: { left: "66%", top: "48%" },
    schools: ["d", "e"]
  }
]

const quickFilters = ["距离最近", "评分最高", "人均最低", "学生优惠"]
const cuisines = ["川菜", "日料", "快餐", "甜品", "烧烤", "轻食", "奶茶", "咖啡"]
const prices = ["0-20", "20-40", "40+"]
const statuses = ["正在营业", "深夜营业"]
const tags = ["适合自习", "有套餐", "可送餐", "学生优惠", "本校同学推荐", "聚会"]
const folders = ["全部", "二刷餐厅", "想带朋友去", "深夜首选"]

const notifications = [
  { id: "n1", title: "川味小馆回复了你的评价", content: "谢谢推荐，欢迎下次再来！", unread: true },
  { id: "n2", title: "校园烧烤档上新学生优惠", content: "周三晚 7 点后全场 9 折。", unread: true },
  { id: "n3", title: "轻食研究所新增适合自习标签", content: "新增插座与安静角落提示。", unread: false }
]

const schoolSwitcher = document.getElementById("school-switcher")
const mapSurface = document.getElementById("map-surface")
const mapCardRow = document.getElementById("map-card-row")
const quickFilterWrap = document.getElementById("quick-filters")
const listGrid = document.getElementById("list-grid")
const rankList = document.getElementById("rank-list")
const postList = document.getElementById("post-list")
const heroRecoBtn = document.getElementById("hero-reco-btn")
const shakeBtn = document.getElementById("shake-btn")
const detailModal = document.getElementById("detail-modal")
const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const searchBar = document.querySelector(".search-bar")
const searchSuggest = document.getElementById("search-suggest")
const searchGrid = document.getElementById("search-grid")
const searchMeta = document.getElementById("search-meta")
const notifyBtn = document.getElementById("notify-btn")
const notifyBadge = document.getElementById("notify-badge")
const notifyModal = document.getElementById("notify-modal")
const notifyClose = document.getElementById("notify-close")
const notifyClear = document.getElementById("notify-clear")
const notificationList = document.getElementById("notification-list")
const favoritesModal = document.getElementById("favorites-modal")
const favoritesClose = document.getElementById("favorites-close")
const favoritesClear = document.getElementById("favorites-clear")
const favoritesFolders = document.getElementById("favorites-folders")
const favoritesList = document.getElementById("favorites-list")
const favoritesMetaText = document.getElementById("favorites-meta-text")
const openFavoritesBtn = document.getElementById("open-favorites")
const openReviewsBtn = document.getElementById("open-reviews")
const openFootprintBtn = document.getElementById("open-footprint")
const openBenefitBtn = document.getElementById("open-benefit")

const toast = document.createElement("div")
toast.className = "shake-toast"
document.body.appendChild(toast)

const showToast = (message) => {
  toast.textContent = message
  toast.classList.add("show")
  setTimeout(() => toast.classList.remove("show"), 2200)
}

const routeIds = ["r1", "r2", "r5", "r7", "r9"]

// 简易图片占位生成（SVG 转 data URL）
const getPhotoSrc = (item) => {
  if (item.photo) return item.photo
  const colors = {
    正餐: ["#ffd8c2", "#ffe7d6"],
    快餐: ["#d7f7e3", "#e9fff1"],
    饮品: ["#dce8ff", "#edf3ff"]
  }
  const [c1, c2] = colors[item.type] || ["#eee", "#fafafa"]
  const text = "餐馆图片 🖼️"
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="480" height="320">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="50%" y="55%" font-family="sans-serif" font-size="42" fill="#d45a1d" text-anchor="middle">${text}</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const updateHero = (item) => {
  document.getElementById("hero-reco-name").textContent = item.name
  document.getElementById("hero-reco-meta").textContent = `人均 ${item.price} 元 · 评分 ${item.rating} · ${item.distance}m`
  const dt = new Date()
  const dateStr = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`
  let tip = "今日尝新"
  if (item.cuisine === "咖啡" || (item.tags && (item.tags.includes("适合自习") || item.tags.includes("自习")))) tip = "自习续杯"
  if (item.tags && (item.tags.includes("适合聚餐") || item.tags.includes("聚会"))) tip = "适合聚会"
  if (["轻食", "甜品"].includes(item.cuisine) || (item.tags && item.tags.includes("低卡"))) tip = "适合清淡"
  if (["川菜", "烧烤"].includes(item.cuisine)) tip = "适宜吃辣"
  const dateEl = document.getElementById("hero-reco-date")
  if (dateEl) dateEl.textContent = `${dateStr} · ${tip}`
  heroRecoBtn.onclick = () => openDetail(item)
}

const renderSchools = () => {
  schoolSwitcher.innerHTML = ""
  schools.forEach((school) => {
    const btn = document.createElement("button")
    btn.className = `school-btn ${school.id === state.currentSchoolId ? "active" : ""}`
    btn.textContent = school.name
    btn.onclick = () => {
      state.currentSchoolId = school.id
      renderSchools()
      // 移动用户定位到该学校默认位置
      const pos = userPinPositions[school.id] || userPinPositions["a"]
      const pin = document.getElementById("user-pin")
      pin.style.left = pos.left
      pin.style.top = pos.top
      // 重置类型筛选并刷新地图与列表
      state.mapTypeFilter = null
      renderLegendActive()
      renderMarkers()
      renderMapList()
      const list = visibleRestaurants()
      if (list.length) {
        setMapCard(list[0])
      } else {
        document.getElementById("map-card-title").textContent = "暂无餐厅"
        document.getElementById("map-card-meta").textContent = "该校暂无数据"
      }
    }
    schoolSwitcher.appendChild(btn)
  })
}

const visibleRestaurants = (opts = {}) => {
  const { includeDistance = false } = opts
  let list = restaurants.filter((item) => item.schools.includes(state.currentSchoolId))
  if (state.mapTypeFilter) {
    list = list.filter((item) => item.type === state.mapTypeFilter)
  }
  if (includeDistance) {
    list = list.filter((item) => item.distance <= state.mapRange)
  }
  return list
}

const renderMarkers = () => {
  mapSurface.querySelectorAll(".map-marker").forEach((el) => el.remove())
  const list = visibleRestaurants()
  list.forEach((item) => {
    const marker = document.createElement("button")
    marker.className = "map-marker"
    marker.textContent = item.name
    marker.style.left = item.marker.left
    marker.style.top = item.marker.top
    marker.onclick = () => setMapCard(item)
    mapSurface.appendChild(marker)
  })
}

const setMapCard = (item) => {
  document.getElementById("map-card-title").textContent = item.name
  document.getElementById("map-card-meta").textContent = `评分 ${item.rating} · 人均 ${item.price} 元 · ${item.tags.slice(0, 2).join(" · ")}`
  document.getElementById("map-detail-btn").onclick = () => openDetail(item)
}

const isFavorite = (id) => state.favorites.some((fav) => fav.id === id)

const toggleFavorite = (item) => {
  const index = state.favorites.findIndex((fav) => fav.id === item.id)
  if (index >= 0) {
    state.favorites.splice(index, 1)
    showToast(`已移除 ${item.name}`)
  } else {
    state.favorites.push({ id: item.id, folder: "二刷餐厅" })
    showToast(`已收藏 ${item.name}`)
  }
  updateFavoritesMeta()
  renderFavorites()
  renderList()
  renderMapList()
  if (state.currentDetailId === item.id) {
    updateDetailFavorite(item)
  }
}

const createCard = (item) => {
  const card = document.createElement("div")
  const favLabel = isFavorite(item.id) ? "已收藏" : "收藏"
  card.className = "card"
  card.innerHTML = `
    <div class="card-photo"><img alt="${item.name}" src="${getPhotoSrc(item)}"/></div>
    <div class="card-title">${item.name}</div>
    <div class="card-meta">评分 ${item.rating} · 人均 ${item.price} 元 · ${item.distance}m</div>
    <div class="card-tags">${item.tags.slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    <button class="secondary" data-id="${item.id}">${favLabel}</button>
  `
  const btn = card.querySelector("button")
  btn.onclick = () => toggleFavorite(item)
  card.onclick = (event) => {
    if (event.target.tagName !== "BUTTON") {
      openDetail(item)
    }
  }
  return card
}

const renderMapList = () => {
  mapCardRow.innerHTML = ""
  const items = visibleRestaurants({ includeDistance: true })
    .slice(0, 4)
  items.forEach((item) => mapCardRow.appendChild(createCard(item)))
}

const renderQuickFilters = () => {
  quickFilterWrap.innerHTML = ""
  quickFilters.forEach((label) => {
    const btn = document.createElement("button")
    btn.className = `tag-toggle ${state.filters.quick === label ? "active" : ""}`
    btn.textContent = label
    btn.onclick = () => {
      state.filters.quick = label
      renderQuickFilters()
      renderList()
    }
    quickFilterWrap.appendChild(btn)
  })
}

const renderFilterTags = (targetId, items, selected) => {
  const wrap = document.getElementById(targetId)
  wrap.innerHTML = ""
  items.forEach((item) => {
    const btn = document.createElement("button")
    const active = selected.includes(item)
    btn.className = `tag-toggle ${active ? "active" : ""}`
    btn.textContent = item
    btn.onclick = () => {
      if (active) {
        selected.splice(selected.indexOf(item), 1)
      } else {
        selected.push(item)
      }
      renderFilterTags(targetId, items, selected)
      updateTagSummary()
      renderList()
    }
    wrap.appendChild(btn)
  })
}

const updateTagSummary = () => {
  const wrap = document.getElementById("filter-tags")
  const all = [...state.filters.cuisines, ...state.filters.price, ...state.filters.status, ...state.filters.tags]
  const clearBtn = document.getElementById("filter-clear")
  if (all.length) {
    wrap.innerHTML = all.map((item) => `<span class="tag">${item}</span>`).join("")
    if (clearBtn) clearBtn.style.display = "inline-block"
  } else {
    wrap.innerHTML = ""
    if (clearBtn) clearBtn.style.display = "none"
  }
}

const applyFilters = (list) => {
  let result = [...list]
  if (state.filters.cuisines.length) {
    result = result.filter((item) => state.filters.cuisines.includes(item.cuisine))
  }
  if (state.filters.price.length) {
    result = result.filter((item) => {
      const priceLabel = item.price <= 20 ? "0-20" : item.price <= 40 ? "20-40" : "40+"
      return state.filters.price.includes(priceLabel)
    })
  }
  if (state.filters.status.length) {
    result = result.filter((item) => state.filters.status.includes(item.status))
  }
  if (state.filters.tags.length) {
    result = result.filter((item) => state.filters.tags.some((tag) => item.tags.includes(tag)))
  }
  if (state.filters.quick === "距离最近") {
    result.sort((a, b) => a.distance - b.distance)
  }
  if (state.filters.quick === "评分最高") {
    result.sort((a, b) => b.rating - a.rating)
  }
  if (state.filters.quick === "人均最低") {
    result.sort((a, b) => a.price - b.price)
  }
  if (state.filters.quick === "学生优惠") {
    result.sort((a, b) => b.tags.includes("学生优惠") - a.tags.includes("学生优惠"))
  }
  return result
}

const renderList = () => {
  listGrid.innerHTML = ""
  const items = applyFilters(restaurants)
  items.forEach((item) => listGrid.appendChild(createCard(item)))
}

const renderCommunity = () => {
  if (rankList) {
    rankList.innerHTML = restaurants.slice(0, 5).map((item, index) => `
    <div class="rank-item">
      <strong>#${index + 1} ${item.name}</strong>
      <span>评分 ${item.rating} · 人均 ${item.price} 元 · ${item.distance}m</span>
    </div>
  `).join("")
  }
}

const openDetail = (item) => {
  state.currentDetailId = item.id
  document.getElementById("detail-title").textContent = item.name
  document.getElementById("detail-meta").textContent = `评分 ${item.rating} · 人均 ${item.price} 元 · ${item.distance}m`
  document.getElementById("detail-benefit").textContent = item.benefit
  document.getElementById("detail-dishes").innerHTML = item.dishes.map((dish) => `<span class="tag">${dish}</span>`).join("")
  document.getElementById("detail-reviews").innerHTML = item.reviews.map((review) => `
    <div class="review-item">
      <strong>${review.user}</strong>
      <span>${review.content}</span>
    </div>
  `).join("")
  updateDetailFavorite(item)
  detailModal.classList.add("show")
}

const closeDetail = () => {
  detailModal.classList.remove("show")
}

const updateDetailFavorite = (item) => {
  const btn = document.getElementById("detail-fav-btn")
  btn.textContent = isFavorite(item.id) ? "已收藏" : "收藏"
  btn.onclick = () => toggleFavorite(item)
}

const updateFavoritesMeta = () => {
  const count = state.favorites.length
  const el = document.getElementById("favorites-meta-text")
  if (el) el.textContent = count ? `已收藏 ${count} 家` : "暂无收藏"
}

const bindNav = () => {
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.onclick = () => {
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"))
      btn.classList.add("active")
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"))
      document.getElementById(btn.dataset.target).classList.add("active")
      state.currentView = btn.dataset.target
      if (searchBar) {
        const showSearch = state.currentView === "map-view" || state.currentView === "list-view"
        searchBar.style.display = showSearch ? "grid" : "none"
      }
    }
  })
}

const bindRangeSwitcher = () => {
  document.querySelectorAll(".seg-btn").forEach((btn) => {
    btn.onclick = () => {
      document.querySelectorAll(".seg-btn").forEach((item) => item.classList.remove("active"))
      btn.classList.add("active")
      state.mapRange = Number(btn.dataset.range)
      renderMapList()
    }
  })
}

const bindAdvancedToggle = () => {
  // 已移除“高级筛选”按钮，默认展开，无需绑定
}

const renderLegendActive = () => {
  document.querySelectorAll(".map-legend .legend-item").forEach((node) => {
    const type = node.dataset.type
    const active = state.mapTypeFilter === type
    node.classList.toggle("active", active)
    node.setAttribute("aria-pressed", active ? "true" : "false")
  })
}

const bindMapLegend = () => {
  document.querySelectorAll(".map-legend .legend-item").forEach((node) => {
    const type = node.dataset.type
    node.onclick = () => {
      state.mapTypeFilter = state.mapTypeFilter === type ? null : type
      renderLegendActive()
      renderMarkers()
      renderMapList()
      showToast(state.mapTypeFilter ? `已筛选：${state.mapTypeFilter}` : "已清除类型筛选")
    }
  })
  renderLegendActive()
}

const bindDetailActions = () => {
  document.getElementById("map-detail-btn").onclick = () => openDetail(restaurants[0])
  document.getElementById("map-route-btn").onclick = () => showToast("已打开路线规划")
  document.getElementById("detail-share-btn").onclick = () => showToast("已生成分享卡片")
  document.getElementById("detail-review-btn").onclick = () => showToast("评价编辑页已打开")
  document.getElementById("detail-nav-btn").onclick = () => showToast("已唤起地图导航")
  document.getElementById("detail-close").onclick = closeDetail
  detailModal.onclick = (event) => {
    if (event.target === detailModal) {
      closeDetail()
    }
  }
}

const bindShake = () => {
  shakeBtn.onclick = () => {
    const random = restaurants[Math.floor(Math.random() * restaurants.length)]
    updateHero(random)
    showToast(`今天推荐：${random.name} · 人均 ${random.price} · ${random.distance}m`)
  }
}

const bindLocate = () => {
  // 已移除“定位附近”按钮，保留空实现以兼容调用
}

// 删除“回到学校范围”按钮后的兼容，无需绑定

const searchItems = (query) => {
  const keyword = query.trim()
  if (!keyword) return []
  return restaurants.filter((item) => {
    const combined = [
      item.name,
      item.cuisine,
      item.tags.join(" "),
      item.dishes.join(" "),
      `${item.distance}m`
    ].join(" ")
    return combined.toLowerCase().includes(keyword.toLowerCase())
  })
}

const renderSearchResults = (query) => {
  const results = searchItems(query)
  searchGrid.innerHTML = ""
  if (!query.trim()) {
    searchMeta.textContent = "请输入关键词开始搜索"
    return
  }
  searchMeta.textContent = `找到 ${results.length} 家相关餐厅`
  results.forEach((item) => searchGrid.appendChild(createCard(item)))
}

const renderSearchSuggest = (query) => {
  const keyword = query.trim()
  const pool = [
    ...restaurants.map((item) => item.name),
    ...cuisines,
    ...tags
  ]
  const list = keyword
    ? pool.filter((item) => item.toLowerCase().includes(keyword.toLowerCase())).slice(0, 6)
    : ["川菜", "学生优惠", "深夜营业", "适合自习"]
  searchSuggest.innerHTML = ""
  list.forEach((item) => {
    const btn = document.createElement("button")
    btn.textContent = item
    btn.onclick = () => {
      searchInput.value = item
      state.searchQuery = item
      renderSearchResults(item)
    }
    searchSuggest.appendChild(btn)
  })
}

const bindSearch = () => {
  searchInput.oninput = (event) => {
    state.searchQuery = event.target.value
    renderSearchSuggest(state.searchQuery)
  }
  searchInput.onkeydown = (event) => {
    if (event.key === "Enter") {
      renderSearchResults(searchInput.value)
    }
  }
  searchBtn.onclick = () => renderSearchResults(searchInput.value)
  renderSearchSuggest("")
}

const updateNotifyBadge = () => {
  const count = notifications.filter((item) => item.unread).length
  notifyBadge.textContent = count
  notifyBadge.style.display = count ? "inline-block" : "none"
}

const renderNotifications = () => {
  notificationList.innerHTML = notifications.map((item) => `
    <div class="notification-item ${item.unread ? "unread" : ""}" data-id="${item.id}">
      <strong>${item.title}</strong>
      <span>${item.content}</span>
    </div>
  `).join("")
  notificationList.querySelectorAll(".notification-item").forEach((node) => {
    node.onclick = () => {
      const id = node.dataset.id
      const target = notifications.find((item) => item.id === id)
      if (target) {
        target.unread = false
        renderNotifications()
        updateNotifyBadge()
      }
    }
  })
}

const bindNotifications = () => {
  notifyBtn.onclick = () => {
    renderNotifications()
    updateNotifyBadge()
    notifyModal.classList.add("show")
  }
  notifyClose.onclick = () => notifyModal.classList.remove("show")
  notifyModal.onclick = (event) => {
    if (event.target === notifyModal) {
      notifyModal.classList.remove("show")
    }
  }
  notifyClear.onclick = () => {
    notifications.forEach((item) => {
      item.unread = false
    })
    renderNotifications()
    updateNotifyBadge()
  }
}

const renderFavorites = () => {
  document.getElementById("favorites-meta").textContent = `${state.favorites.length} 家餐厅`
  favoritesFolders.innerHTML = ""
  folders.forEach((folder) => {
    const btn = document.createElement("button")
    btn.className = `folder-chip ${folder === state.favoriteFolder ? "active" : ""}`
    btn.textContent = folder
    btn.onclick = () => {
      state.favoriteFolder = folder
      renderFavorites()
    }
    favoritesFolders.appendChild(btn)
  })
  favoritesList.innerHTML = ""
  const list = state.favoriteFolder === "全部"
    ? state.favorites
    : state.favorites.filter((item) => item.folder === state.favoriteFolder)
  if (!list.length) {
    favoritesList.innerHTML = `<div class="notification-item">暂无收藏内容</div>`
    return
  }
  list.forEach((fav) => {
    const item = restaurants.find((restaurant) => restaurant.id === fav.id)
    if (!item) return
    const row = document.createElement("div")
    row.className = "favorite-item"
    row.innerHTML = `
      <div class="favorite-info">
        <strong>${item.name}</strong>
        <span class="favorite-meta">评分 ${item.rating} · 人均 ${item.price} 元 · ${item.distance}m</span>
      </div>
      <div class="favorite-actions">
        <select data-id="${item.id}">
          ${folders.filter((folder) => folder !== "全部").map((folder) => `
            <option value="${folder}" ${folder === fav.folder ? "selected" : ""}>${folder}</option>
          `).join("")}
        </select>
        <button class="secondary" data-remove="${item.id}">移除</button>
      </div>
    `
    favoritesList.appendChild(row)
  })
  favoritesList.querySelectorAll("select").forEach((select) => {
    select.onchange = (event) => {
      const id = event.target.dataset.id
      const target = state.favorites.find((fav) => fav.id === id)
      if (target) {
        target.folder = event.target.value
        renderFavorites()
      }
    }
  })
  favoritesList.querySelectorAll("button[data-remove]").forEach((btn) => {
    btn.onclick = () => {
      const id = btn.dataset.remove
      const target = restaurants.find((item) => item.id === id)
      if (target) {
        toggleFavorite(target)
      }
    }
  })
}

const bindFavorites = () => {
  const btn = document.getElementById("open-favorites")
  const closeBtn = document.getElementById("favorites-close")
  const clearBtn = document.getElementById("favorites-clear")
  if (btn) btn.onclick = () => openFavorites()
  if (closeBtn) closeBtn.onclick = () => closeModal("favorites-modal")
  if (clearBtn) clearBtn.onclick = () => {
    state.favorites = []
    renderFavoritesList()
    renderFavoritesMap()
    updateFavoritesMeta()
    showToast("已清空收藏")
  }
}

const bindProfileActions = () => {
  if (typeof openReviewsBtn !== "undefined" && openReviewsBtn) openReviewsBtn.onclick = openReviews
  if (typeof openFootprintBtn !== "undefined" && openFootprintBtn) openFootprintBtn.onclick = openFootprint
  if (typeof openBenefitBtn !== "undefined" && openBenefitBtn) openBenefitBtn.onclick = () => showToast("已为你筛选学生特权")
}

// 词云交互与自适应
const randomizeWordCloud = () => {
  const nodes = document.querySelectorAll(".word-cloud .word")
  nodes.forEach((node) => {
    const deg = (Math.random() * 10 - 5).toFixed(1) // -5° ~ 5°
    node.style.setProperty("--rot", `${deg}deg`)
  })
}

const bindWordCloud = () => {}

const bindFilterClear = () => {
  const btn = document.getElementById("filter-clear")
  if (!btn) return
  btn.onclick = () => {
    state.filters.cuisines.length = 0
    state.filters.price.length = 0
    state.filters.status.length = 0
    state.filters.tags.length = 0
    updateTagSummary()
    renderFilterTags("filter-cuisine", cuisines, state.filters.cuisines)
    renderFilterTags("filter-price", prices, state.filters.price)
    renderFilterTags("filter-status", statuses, state.filters.status)
    renderFilterTags("filter-tags-adv", tags, state.filters.tags)
    renderList()
    showToast("已清除所有筛选")
  }
}

const renderChallenge = () => {
  const done = state.checkins.filter((c) => routeIds.includes(c.id)).length
  const total = routeIds.length
  const text = document.getElementById("challenge-progress-text")
  const bar = document.getElementById("challenge-progress-bar")
  if (text) text.textContent = `${done}/${total}`
  if (bar) bar.style.width = `${Math.round((done / total) * 100)}%`
}

const bindDetailCheckin = (item) => {
  const btn = document.getElementById("detail-checkin-btn")
  if (!btn) return
  btn.textContent = state.checkins.some(c => c.id === item.id) ? "已打卡" : "打卡"
  btn.onclick = () => {
    if (!state.checkins.find(c => c.id === item.id)) {
      state.checkins.push({ id: item.id, time: Date.now() })
      showToast(`已打卡：${item.name}`)
      renderChallenge()
      appendCheckinFeed(item)
    } else {
      showToast("已打卡过啦")
    }
    btn.textContent = "已打卡"
  }
}

const appendCheckinFeed = (item) => {
  const feed = document.getElementById("checkin-feed")
  if (!feed) return
  const card = document.createElement("div")
  card.className = "feed-card"
  card.innerHTML = `
    <div class="feed-head">
      <div class="avatar-sm">你</div>
      <div><strong>刚刚</strong> 打卡了 ${item.name}</div>
    </div>
    <div class="feed-images">
      <img src="${getPhotoSrc(item)}" alt="${item.name}">
      <img src="${getPhotoSrc(item)}" alt="${item.name}">
      <img src="${getPhotoSrc(item)}" alt="${item.name}">
    </div>
    <div class="feed-actions">
      <button class="pill ghost">🔥 我也想去</button>
      <button class="pill ghost">💬 评论</button>
      <button class="pill ghost">↪️ 转发</button>
    </div>
  `
  feed.prepend(card)
}

const renderTopics = () => {
  const list = document.getElementById("topic-list")
  if (!list) return
  const topics = [
    { title: "#大学城最好吃的炸鸡#", participants: 89, snippets: ["脆皮多汁", "夜宵必备", "求店名"] },
    { title: "#避雷！这家店别去#", participants: 34, snippets: ["环境一般", "服务态度差", "不建议"] },
    { title: "#一人食求推荐#", participants: 12, snippets: ["适合自习", "位置安静", "套餐实惠"] }
  ]
  list.innerHTML = topics.map(t => `
    <div class="topic-card">
      <div class="title">${t.title} · 参与 ${t.participants} 人</div>
      <div class="snippet">最新：${t.snippets.slice(0,3).join(" · ")}</div>
      <button class="pill ghost">参与讨论</button>
    </div>
  `).join("")
  list.querySelectorAll(".topic-card button").forEach((btn) => {
    btn.onclick = () => showToast("已进入话题讨论")
  })
}

const renderCheckinFeed = () => {
  const feed = document.getElementById("checkin-feed")
  if (!feed) return
  feed.innerHTML = restaurants.slice(0, 3).map((item, idx) => `
    <div class="feed-card" data-id="${item.id}">
      <div class="feed-head">
        <div class="avatar-sm">${["A","B","C"][idx]}</div>
        <div><strong>${["刚刚","5 分钟前","10 分钟前"][idx]}</strong> 打卡了 ${item.name}</div>
      </div>
      <div class="feed-images">
        <img src="${getPhotoSrc(item)}" alt="${item.name}">
        <img src="${getPhotoSrc(item)}" alt="${item.name}">
        <img src="${getPhotoSrc(item)}" alt="${item.name}">
      </div>
      <div class="feed-actions">
        <button class="pill ghost">🔥 我也想去</button>
        <button class="pill ghost">💬 评论</button>
        <button class="pill ghost">↪️ 转发</button>
      </div>
    </div>
  `).join("")
  feed.querySelectorAll(".feed-images img").forEach((img) => {
    img.onclick = () => showToast("已打开大图预览")
    img.ondblclick = () => showToast("已标记：🔥 我也想去")
    img.oncontextmenu = (e) => {
      e.preventDefault()
      showToast("已收藏到想吃")
    }
  })
}

const bindMeetup = () => {
  const createBtn = document.getElementById("meetup-create")
  const list = document.getElementById("meetup-list")
  if (!list) return
  list.innerHTML = [
    { title: "今晚 7 点 南门烧烤 缺 2 人", host: "A大 小李" },
    { title: "周末去新开的日料店吗", host: "B大 阿雅" }
  ].map(item => `
    <div class="feed-card">
      <div><strong>${item.title}</strong></div>
      <div class="snippet">发起人：${item.host}</div>
      <div class="feed-actions">
        <button class="primary">报名参与</button>
      </div>
    </div>
  `).join("")
  list.querySelectorAll(".feed-card .primary").forEach((btn) => {
    btn.onclick = () => showToast("已报名，已进入临时群聊")
  })
  if (createBtn) createBtn.onclick = () => showToast("发布约饭入口已打开")
}

const bindPK = () => {
  const area = document.getElementById("pk-area")
  if (!area) return
  const leftName = document.getElementById("pk-left-name")
  const rightName = document.getElementById("pk-right-name")
  const leftCount = document.getElementById("pk-left-count")
  const rightCount = document.getElementById("pk-right-count")
  const leftBar = document.getElementById("pk-left-bar")
  const rightBar = document.getElementById("pk-right-bar")
  const ratioText = document.getElementById("pk-ratio-text")
  const totalEl = document.getElementById("pk-total")
  const leftOpt = document.getElementById("pk-left")
  const rightOpt = document.getElementById("pk-right")
  const btnComment = document.getElementById("pk-comment")
  const btnHistory = document.getElementById("pk-history")
  const optLeftText = area.getAttribute("data-left") || "左"
  const optRightText = area.getAttribute("data-right") || "右"
  if (leftName) leftName.textContent = optLeftText
  if (rightName) rightName.textContent = optRightText
  let left = 0, right = 0
  let voted = null
  const render = () => {
    const total = left + right
    leftCount.textContent = left
    rightCount.textContent = right
    totalEl.textContent = total
    const lp = total ? Math.round((left / total) * 100) : 50
    const rp = 100 - lp
    leftBar.style.width = lp + "%"
    rightBar.style.width = rp + "%"
    ratioText.textContent = `${lp}% : ${rp}%`
    leftOpt.classList.toggle("active", voted === "left")
    rightOpt.classList.toggle("active", voted === "right")
  }
  const vote = (side) => {
    if (voted === side) return
    if (side === "left") left++
    if (side === "right") right++
    if (voted === "left") left--
    if (voted === "right") right--
    voted = side
    render()
    showToast(`已站队：${side === "left" ? optLeftText : optRightText}`)
  }
  leftOpt.onclick = () => vote("left")
  rightOpt.onclick = () => vote("right")
  if (btnComment) btnComment.onclick = () => {
    document.querySelector('[data-target="community-view"]').click()
    showToast("已进入话题讨论区")
  }
  if (btnHistory) btnHistory.onclick = () => showToast("已打开往期对决")
  render()
}

const startCarousel = () => {
  const track = document.querySelector("#community-carousel .carousel-track")
  const dotsWrap = document.getElementById("carousel-dots")
  if (!track || !dotsWrap) return
  const slides = Array.from(track.children)
  dotsWrap.innerHTML = slides.map((_, i) => `<span class="dot${i===0?" active":""}"></span>`).join("")
  let index = 0
  setInterval(() => {
    index = (index + 1) % slides.length
    track.style.transform = `translateX(-${index * 100}%)`
    dotsWrap.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("active", i===index))
  }, 3000)
}

const bindHotWords = () => {
  const wrap = document.getElementById("hot-words")
  if (!wrap) return
  wrap.querySelectorAll(".chip").forEach((btn) => {
    btn.onclick = () => {
      const topic = btn.dataset.topic
      searchInput.value = topic
      state.searchQuery = topic
      renderSearchResults(topic)
      showToast(`已打开话题：${topic}`)
    }
  })
}

const openModal = (id) => {
  const m = document.getElementById(id)
  if (m) m.classList.add("show")
}
const closeModal = (id) => {
  const m = document.getElementById(id)
  if (m) m.classList.remove("show")
}

const openRouteGuide = (target) => {
  const titleSub = document.getElementById("route-subtitle")
  const body = document.getElementById("route-body")
  const nav = document.getElementById("route-nav")
  const ok = document.getElementById("route-ok")
  const close = document.getElementById("route-close")
  const name = target?.name || "目标点"
  const dist = target?.distance || 500
  if (titleSub) titleSub.textContent = "从当前位置出发"
  if (body) {
    const overview = `从当前食堂出发，经主干道右转，步行约 ${dist} 米`
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="280" viewBox="0 0 600 280" style="width:100%;border-radius:12px;background:#fff">
        <rect x="12" y="12" width="576" height="256" rx="12" fill="#fcfbf7" stroke="#eee"/>
        <path d="M80 220 L200 220 L280 160 L420 160 L520 100" stroke="#e11d48" stroke-width="6" fill="none"/>
        <circle cx="80" cy="220" r="10" fill="#2f7cf6"/>
        <text x="96" y="224" font-size="14" fill="#334155">起点 · 你</text>
        <circle cx="520" cy="100" r="10" fill="#10b981"/>
        <text x="536" y="104" font-size="14" fill="#334155">终点</text>
      </svg>
    `
    body.innerHTML = `
      <div class="route-section"><strong>任务目标：</strong> 前往 <strong>${name}</strong></div>
      <div class="route-section"><strong>打卡条件：</strong> 到达目标点 50 米范围内即可点击打卡</div>
      <div class="route-section"><strong>路线概览：</strong> ${overview}</div>
      <div class="route-map" style="margin:10px 0">${svg}</div>
    `
  }
  if (nav) nav.onclick = () => {
    const url = `https://maps.apple.com/?q=${encodeURIComponent(name)}`
    window.open(url, "_blank")
  }
  if (ok) ok.onclick = () => closeModal("route-modal")
  if (close) close.onclick = () => closeModal("route-modal")
  openModal("route-modal")
}

const bindChallengeRoute = () => {
  const btn = document.getElementById("challenge-view-route")
  if (!btn) return
  btn.onclick = () => {
    const unvisited = routeIds.filter(id => !state.checkins.find(c => c.id === id))
    const targetId = unvisited[0] || routeIds[0]
    const target = restaurants.find(r => r.id === targetId) || { name: "目标点", distance: 500 }
    openRouteGuide(target)
  }
}

const renderFavoritesFolders = () => {
  const wrap = document.getElementById("favorites-folders")
  if (!wrap) return
  const all = ["全部", ...state.folders]
  wrap.innerHTML = all.map((f) => {
    const ico = state.folderIcons[f] || "📁"
    return `<button class="folder-chip${state.favoriteFolder===f?' active':''}" draggable="${f!=="全部"}" data-folder="${f}">${f==="全部"?"全部":ico+" "+f}</button>`
  }).join("") + `<button class="folder-chip" id="folder-add">+</button>`
  wrap.querySelectorAll(".folder-chip[data-folder]").forEach((btn) => {
    btn.onclick = () => {
      if (state.favoriteManageMode && btn.dataset.folder!=="全部") {
        const name = btn.dataset.folder
        const act = prompt(`${name}: 输入新名称，或输入 del 删除`)
        if (!act) return
        if (act.trim().toLowerCase() === "del") {
          if (name==="想吃"||name==="去过") return alert("默认文件夹不可删除")
          state.favorites.forEach(f => { if (f.folder===name) f.folder="想吃" })
          state.folders = state.folders.filter(f => f!==name)
          delete state.folderIcons[name]
          if (state.favoriteFolder===name) state.favoriteFolder="想吃"
        } else {
          const trimmed = act.trim().slice(0,10)
          if (!trimmed) return
          if (state.folders.includes(trimmed)) return alert("已存在同名文件夹")
          state.folders = state.folders.map(f => f===name?trimmed:f)
          state.favorites.forEach(f => { if (f.folder===name) f.folder=trimmed })
          state.folderIcons[trimmed] = state.folderIcons[name] || "📁"
          delete state.folderIcons[name]
          if (state.favoriteFolder===name) state.favoriteFolder=trimmed
        }
        renderFavoritesFolders()
        renderFavoritesList()
        renderFavoritesMap()
        updateBatchOptions()
        return
      }
      state.favoriteFolder = btn.dataset.folder
      renderFavoritesFolders()
      renderFavoritesList()
      renderFavoritesMap()
    }
    btn.addEventListener("dragstart", (e) => e.dataTransfer.setData("text/plain", btn.dataset.folder))
    btn.addEventListener("dragover", (e) => e.preventDefault())
    btn.addEventListener("drop", (e) => {
      e.preventDefault()
      const src = e.dataTransfer.getData("text/plain")
      const dst = btn.dataset.folder
      if (!src || !dst || src===dst) return
      const a = state.folders.indexOf(src)
      const b = state.folders.indexOf(dst)
      if (a<0 || b<0) return
      const [m] = state.folders.splice(a,1)
      state.folders.splice(b,0,m)
      renderFavoritesFolders()
    })
  })
  const addBtn = document.getElementById("folder-add")
  if (addBtn) addBtn.onclick = () => openModal("folder-modal")
  updateBatchOptions()
}

const getFavoriteItems = () => {
  return state.favorites
    .filter((fav) => state.favoriteFolder === "全部" ? true : fav.folder === state.favoriteFolder)
    .map((fav) => restaurants.find((r) => r.id === fav.id))
    .filter(Boolean)
}

const renderFavoritesList = () => {
  const list = document.getElementById("favorites-list")
  if (!list) return
  if (state.favoriteView !== "list") {
    list.style.display = "none"
    return
  }
  list.style.display = "grid"
  const items = getFavoriteItems()
  list.classList.toggle("select-mode", state.favoriteManageMode)
  list.innerHTML = items.map((item) => `
    <div class="favorite-item" draggable="true" data-id="${item.id}">
      <input class="favorite-check" type="checkbox" data-sel="${item.id}" ${state.favoriteSelection.includes(item.id)?"checked":""}/>
      <div class="favorite-info">
        <strong>${item.name}</strong>
        <div class="favorite-meta">评分 ${item.rating} · 人均 ${item.price} 元</div>
      </div>
      <div class="favorite-actions">
        <button class="pill ghost" data-done="${item.id}">✔️</button>
        <select data-id="${item.id}">
          ${state.folders.map(f => `<option value="${f}" ${state.favorites.find(x=>x.id===item.id)?.folder===f?'selected':''}>${f}</option>`).join("")}
        </select>
        <button class="pill ghost" data-remove="${item.id}">移除</button>
      </div>
    </div>
  `).join("")
  list.querySelectorAll('input[data-sel]').forEach((cb) => {
    cb.onchange = () => {
      const id = cb.getAttribute('data-sel')
      if (cb.checked) {
        if (!state.favoriteSelection.includes(id)) state.favoriteSelection.push(id)
      } else {
        state.favoriteSelection = state.favoriteSelection.filter(x => x!==id)
      }
      updateBatchBar()
    }
  })
  list.querySelectorAll('button[data-done]').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-done')
      const fav = state.favorites.find(f => f.id===id)
      if (fav) fav.folder = "去过"
      renderFavoritesList()
      renderFavoritesMap()
      showToast("已标记为去过")
    }
  })
  list.querySelectorAll('select[data-id]').forEach((sel) => {
    sel.onchange = (e) => {
      const id = sel.getAttribute('data-id')
      const fav = state.favorites.find((x) => x.id === id)
      if (fav) fav.folder = sel.value
      renderFavoritesMap()
      showToast("已移动到 " + sel.value)
    }
  })
  list.querySelectorAll('button[data-remove]').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-remove')
      state.favorites = state.favorites.filter((f) => f.id !== id)
      renderFavoritesList()
      renderFavoritesMap()
      updateFavoritesMeta()
      showToast("已移除收藏")
    }
  })
  let dragId = null
  list.querySelectorAll(".favorite-item").forEach((row) => {
    row.addEventListener("dragstart", () => dragId = row.dataset.id)
    row.addEventListener("dragover", (e) => e.preventDefault())
    row.addEventListener("drop", () => {
      const targetId = row.dataset.id
      if (!dragId || dragId === targetId) return
      const idx1 = state.favorites.findIndex((f) => f.id === dragId)
      const idx2 = state.favorites.findIndex((f) => f.id === targetId)
      const [moved] = state.favorites.splice(idx1, 1)
      state.favorites.splice(idx2, 0, moved)
      renderFavoritesList()
      showToast("已调整顺序")
    })
  })
}

const renderFavoritesMap = () => {
  const map = document.getElementById("favorites-map")
  if (!map) return
  if (state.favoriteView !== "map") {
    map.style.display = "none"
    return
  }
  map.style.display = "block"
  map.querySelectorAll(".map-marker").forEach(el => el.remove())
  const favs = state.favoriteFolder==="全部" ? state.favorites.slice() : state.favorites.filter(f => f.folder===state.favoriteFolder)
  const show = favs.filter(f => {
    if (f.folder==="想吃" && !state.favoriteFilter.want) return false
    if (f.folder==="去过" && !state.favoriteFilter.done) return false
    if (f.folder!=="想吃" && f.folder!=="去过" && !state.favoriteFilter.custom) return false
    return true
  })
  const groups = {}
  show.forEach(f => {
    const r = restaurants.find(r => r.id===f.id)
    if (!r) return
    const left = parseFloat(r.marker.left)
    const top = parseFloat(r.marker.top)
    const gx = Math.round(left/10)*10
    const gy = Math.round(top/10)*10
    const key = `${gx}_${gy}`
    if (!groups[key]) groups[key] = []
    groups[key].push({ r, folder: f.folder })
  })
  Object.entries(groups).forEach(([key, arr]) => {
    const [gx, gy] = key.split("_").map(n => Number(n))
    if (arr.length===1) {
      const mk = document.createElement("button")
      mk.className = "map-marker"
      const type = arr[0].folder==="想吃" ? "var(--danger)" : arr[0].folder==="去过" ? "var(--success)" : "var(--primary)"
      mk.style.borderColor = type
      mk.style.left = `${gx}%`
      mk.style.top = `${gy}%`
      mk.textContent = arr[0].r.name
      mk.onclick = () => openDetail(arr[0].r)
      map.appendChild(mk)
    } else {
      const mk = document.createElement("div")
      mk.className = "map-marker"
      mk.style.left = `${gx}%`
      mk.style.top = `${gy}%`
      mk.textContent = String(arr.length)
      map.appendChild(mk)
    }
  })
}

const bindFavoritesUI = () => {
  const newBtn = document.getElementById("favorites-new-folder")
  const viewList = document.getElementById("favorites-view-list")
  const viewMap = document.getElementById("favorites-view-map")
  const filterBtn = document.getElementById("favorites-filter")
  const panel = document.getElementById("favorites-filter-panel")
  const cbWant = document.getElementById("fav-filter-want")
  const cbDone = document.getElementById("fav-filter-done")
  const cbCustom = document.getElementById("fav-filter-custom")
  if (newBtn) newBtn.onclick = () => openModal("folder-modal")
  if (viewList) viewList.onclick = () => {
    state.favoriteView = "list"
    renderFavoritesList()
    renderFavoritesMap()
  }
  if (viewMap) viewMap.onclick = () => {
    state.favoriteView = "map"
    renderFavoritesList()
    renderFavoritesMap()
  }
  if (filterBtn) filterBtn.onclick = () => {
    if (!panel) return
    panel.style.display = panel.style.display==="none"?"block":"none"
  }
  if (cbWant) cbWant.onchange = () => { state.favoriteFilter.want = cbWant.checked; renderFavoritesMap() }
  if (cbDone) cbDone.onchange = () => { state.favoriteFilter.done = cbDone.checked; renderFavoritesMap() }
  if (cbCustom) cbCustom.onchange = () => { state.favoriteFilter.custom = cbCustom.checked; renderFavoritesMap() }
}

const openFavorites = () => {
  openModal("favorites-modal")
  document.getElementById("favorites-close").onclick = () => closeModal("favorites-modal")
  document.getElementById("favorites-clear").onclick = () => {
    state.favorites = []
    renderFavoritesList()
    renderFavoritesMap()
    updateFavoritesMeta()
    showToast("已清空收藏")
  }
  const manage = document.getElementById("favorites-manage-toggle")
  if (manage) manage.onclick = () => {
    state.favoriteManageMode = !state.favoriteManageMode
    state.favoriteSelection = []
    updateBatchBar()
    renderFavoritesList()
  }
  renderFavoritesFolders()
  renderFavoritesList()
  renderFavoritesMap()
  bindFavoritesUI()
}

const openReviews = () => {
  openModal("reviews-modal")
  document.getElementById("reviews-close").onclick = () => closeModal("reviews-modal")
  const list = document.getElementById("reviews-list")
  if (list) {
    const sample = restaurants.slice(0, 6).map(r => ({
      title: r.name,
      content: "口味不错，性价比高，推荐朋友来试试。"
    }))
    list.innerHTML = sample.map(s => `
      <div class="post-item">
        <strong>${s.title}</strong>
        <span>${s.content}</span>
      </div>
    `).join("")
  }
}

const openFootprint = () => {
  openModal("footprint-modal")
  document.getElementById("footprint-close").onclick = () => closeModal("footprint-modal")
  renderFootTabs()
  renderFootYears()
  renderFootTimeline()
  renderFootMap()
  bindFootUI()
}

const openMeetups = () => {
  openModal("meetups-modal")
  document.getElementById("meetups-close").onclick = () => closeModal("meetups-modal")
  const wrap = document.getElementById("my-meetups")
  if (!wrap) return
  wrap.innerHTML = [
    { title: "今晚 7 点 南门烧烤 缺 2 人", time: "今天 19:00", status: "进行中" },
    { title: "周末新店试吃", time: "周六 18:00", status: "进行中" },
    { title: "上周五 川味小馆 团建", time: "上周五", status: "已结束" }
  ].map(m => `
    <div class="feed-card">
      <div><strong>${m.title}</strong></div>
      <div class="muted">${m.time} · ${m.status}</div>
      <div class="feed-actions">
        <button class="pill ghost">${m.status === '已结束' ? '评价饭搭子' : '查看详情'}</button>
      </div>
    </div>
  `).join("")
}

const openBadges = () => {
  openModal("badges-modal")
  document.getElementById("badges-close").onclick = () => closeModal("badges-modal")
  const wall = document.getElementById("badge-wall")
  if (!wall) return
  const unlocked = [
    { name: "初来乍到", desc: "首次发表评价", unlocked: true },
    { name: "探店达人", desc: "打卡 10 家不同餐厅", unlocked: state.checkins.length >= 10 },
    { name: "避雷先锋", desc: "5 条评价被标记有用", unlocked: false },
    { name: "人气王", desc: "单条评价点赞过 50", unlocked: false },
    { name: "社交牛杂", desc: "参与 3 次约饭", unlocked: false },
    { name: "凌晨食客", desc: "夜宵打卡 3 次", unlocked: false }
  ]
  wall.innerHTML = unlocked.map(b => `
    <div class="badge-item ${b.unlocked ? '' : 'locked'}">
      <div>🏅</div>
      <div><strong>${b.name}</strong></div>
      <div class="muted">${b.desc}</div>
    </div>
  `).join("")
}

const bindProfileFeatures = () => {
  const f = (id, fn) => {
    const el = document.getElementById(id)
    if (el) el.onclick = fn
  }
  f("feature-favorites", openFavorites)
  f("feature-footprint", openFootprint)
  f("feature-meetups", openMeetups)
  f("feature-topics", openTopics)
  f("feature-badges", openBadges)
  f("feature-coupons", openCoupons)
  f("feature-help", openHelp)
  f("feature-invite", () => showToast("已生成邀请链接"))
  f("feature-dark", () => showToast("夜间模式已切换"))
  const settings = document.getElementById("open-settings")
  if (settings) settings.onclick = () => showToast("已打开设置")
  const logout = document.getElementById("logout-btn")
  if (logout) logout.onclick = () => showToast("已退出登录")
  const statReviews = document.getElementById("stat-reviews")
  if (statReviews) statReviews.onclick = openReviews
  const btnOpenVerify = document.getElementById("open-verify")
  const openInline = document.getElementById("verify-inline")
  const startVerify = () => {
      openModal("verify-modal")
      const closeBtn = document.getElementById("verify-close")
      if (closeBtn) closeBtn.onclick = () => closeModal("verify-modal")
      ;["verify-by-id","verify-by-mail","verify-by-card"].forEach(i => {
        const b = document.getElementById(i)
        if (b) b.onclick = () => {
          const badge = document.getElementById("verify-badge")
          if (badge) badge.style.display = ""
          const inline = document.getElementById("verify-inline")
          if (inline) inline.style.display = "none"
          closeModal("verify-modal")
          showToast("已完成学生认证")
        }
      })
  }
  if (btnOpenVerify) btnOpenVerify.onclick = startVerify
  if (openInline) openInline.onclick = startVerify
  renderIdentity()
  updateFeatureBadges()
}

const renderIdentity = () => {
  const school = schools.find(s => s.id === state.currentSchoolId)?.name || "A大"
  const el = document.getElementById("identity-school")
  if (el) el.textContent = school
  const badge = document.getElementById("verify-badge")
  const verified = badge && badge.style.display !== "none"
  const inline = document.getElementById("verify-inline")
  if (inline) inline.style.display = verified ? "none" : ""
}

const updateFeatureBadges = () => {
  const fav = document.getElementById("badge-favorites")
  const cnt = state.favorites.length
  if (fav) {
    if (cnt > 0) {
      fav.style.display = "grid"
      fav.textContent = cnt > 99 ? "99+" : String(cnt)
    } else {
      fav.style.display = "none"
    }
  }
  const cup = document.getElementById("badge-coupons")
  if (cup) {
    const unused = (typeof coupons !== "undefined") ? coupons.filter(c => c.status==="unused").length : 0
    if (unused > 0) {
      cup.style.display = "grid"
      cup.textContent = unused > 99 ? "99+" : String(unused)
    } else {
      cup.style.display = "none"
    }
  }
}
const topics = {
  mine: [
    { id: "t1", title: "#大学城最好吃的炸鸡#", myContent: "我投校门口那家，脆皮yyds", participants: 89, views: 1234, time: "今天 10:12", unreadReply: true },
    { id: "t2", title: "#避雷！这家店别去#", myContent: "环境一般，服务不太行", participants: 34, views: 560, time: "昨天 21:08", unreadReply: false }
  ],
  join: [
    { id: "t3", title: "#一人食求推荐#", myContent: "我推荐清晨豆花，安静适合自习", participants: 45, views: 678, time: "3 天前", unreadReply: false }
  ]
}

const openTopics = () => {
  openModal("topics-modal")
  const close = document.getElementById("topics-close")
  if (close) close.onclick = () => closeModal("topics-modal")
  renderTopicsCenter()
  bindTopicsUI()
}

const topicsState = { tab: "all" }

const renderTopicsCenter = () => {
  const list = document.getElementById("topics-list")
  const empty = document.getElementById("topics-empty")
  const cAll = document.getElementById("topics-count-all")
  const cMine = document.getElementById("topics-count-mine")
  const cJoin = document.getElementById("topics-count-join")
  const mine = topics.mine
  const join = topics.join
  cMine.textContent = mine.length
  cJoin.textContent = join.length
  cAll.textContent = mine.length + join.length
  const data = topicsState.tab==="mine" ? mine : topicsState.tab==="join" ? join : [...mine, ...join]
  if (!data.length && topicsState.tab==="mine") {
    empty.style.display = "grid"
    list.innerHTML = ""
  } else {
    empty.style.display = "none"
    list.innerHTML = data.map(item => `
      <div class="topic-card swipe" data-id="${item.id}">
        <div class="top">
          <div class="topic-meta">${mine.find(x=>x.id===item.id)?'📢 我发起的':'💬 我参与的'} · ${item.time}</div>
          ${item.unreadReply ? '<span style="width:8px;height:8px;background:#d13438;border-radius:99px;display:inline-block"></span>' : ''}
        </div>
        <div class="title">${item.title}</div>
        <div class="topic-content">${item.myContent}</div>
        <div class="topic-actions">
          <span class="topic-meta">参与 ${item.participants}</span>
          <span class="topic-meta">浏览 ${item.views}</span>
          <button class="secondary" data-view="${item.id}">查看讨论</button>
        </div>
        <div class="swipe-actions" style="display:none">
          <button class="pill ghost" data-top="${item.id}">置顶</button>
          <button class="pill ghost" data-read="${item.id}">标记已读</button>
          <button class="pill ghost" data-del="${item.id}">删除</button>
        </div>
      </div>
    `).join("")
    list.querySelectorAll('[data-view]').forEach(btn => {
      btn.onclick = () => openTopicDetail(btn.getAttribute('data-view'))
    })
    list.querySelectorAll('.topic-card').forEach(card => attachSwipe(card, (type) => {
      const id = card.getAttribute('data-id')
      if (type==="del") {
        topics.mine = topics.mine.filter(x => x.id !== id)
        topics.join = topics.join.filter(x => x.id !== id)
        renderTopicsCenter()
      } else if (type==="read") {
        const it = [...topics.mine, ...topics.join].find(x => x.id===id)
        if (it) it.unreadReply = false
        renderTopicsCenter()
      } else if (type==="top") {
        const arr = topics.mine.find(x=>x.id===id) ? topics.mine : topics.join
        const idx = arr.findIndex(x => x.id===id)
        if (idx>0) { const [m] = arr.splice(idx,1); arr.unshift(m) }
        renderTopicsCenter()
      }
    }))
  }
}

const bindTopicsUI = () => {
  const tabs = document.querySelectorAll('#topics-tabs .tab-btn')
  const underline = document.getElementById('topics-underline')
  const wrap = document.getElementById('topics-tabs')
  const go = document.getElementById('topics-go-community')
  const updateUnderline = (el) => {
    const rect = el.getBoundingClientRect()
    const wrect = wrap.getBoundingClientRect()
    underline.style.transform = `translateX(${rect.left - wrect.left}px)`
    underline.style.width = rect.width + "px"
  }
  tabs.forEach(btn => {
    btn.onclick = () => {
      tabs.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      topicsState.tab = btn.dataset.tab
      renderTopicsCenter()
      updateUnderline(btn)
    }
  })
  updateUnderline(document.querySelector('#topics-tabs .tab-btn.active'))
  if (go) go.onclick = () => {
    document.querySelector('[data-target="community-view"]').click()
    closeModal("topics-modal")
  }
}

const attachSwipe = (card, onAction) => {
  let sx = 0, dx = 0
  const actions = card.querySelector('.swipe-actions')
  card.addEventListener('touchstart', e => { sx = e.touches[0].clientX })
  card.addEventListener('touchmove', e => {
    dx = e.touches[0].clientX - sx
    if (dx < -20) { actions.style.display = 'flex' }
  })
  card.addEventListener('touchend', () => {
    if (dx < -40) actions.style.display = 'flex'
    else actions.style.display = 'none'
    dx = 0
  })
  actions.querySelectorAll('button').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation()
      if (btn.dataset.del) onAction("del")
      if (btn.dataset.read) onAction("read")
      if (btn.dataset.top) onAction("top")
    }
  })
  card.onclick = () => {
    const id = card.getAttribute('data-id')
    openTopicDetail(id)
  }
}

const openTopicDetail = (id) => {
  openModal("topic-detail-modal")
  const t = [...topics.mine, ...topics.join].find(x => x.id===id)
  document.getElementById("topic-detail-title").textContent = t ? t.title : "话题详情"
  document.getElementById("topic-detail-meta").textContent = `参与 ${t.participants} · 浏览 ${t.views}`
  const list = document.getElementById("topic-detail-list")
  const messages = [
    { id: "m1", user: "同学A", content: "我也喜欢这家", mine: false },
    { id: "m2", user: "我", content: t ? t.myContent : "我的发言", mine: true },
    { id: "m3", user: "同学B", content: "是不是排队很久", mine: false }
  ]
  list.innerHTML = messages.map(m => `
    <div class="post-item" id="msg-${m.id}" style="${m.mine?'background:var(--secondary);border-radius:10px;padding:6px':''}">
      <strong>${m.user}${m.mine ? ' · 我' : ''}</strong>
      <span>${m.content}</span>
    </div>
  `).join("")
  const anchor = document.getElementById("msg-m2")
  if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "center" })
  const jump = document.getElementById("topic-jump-mine")
  const body = document.getElementById("topic-detail-body")
  if (jump && body) {
    const check = () => {
      const rect = anchor.getBoundingClientRect()
      const vis = rect.top >= 64 && rect.bottom <= window.innerHeight - 64
      jump.style.display = vis ? "none" : "inline-block"
    }
    body.onscroll = check
    jump.onclick = () => anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    check()
  }
  const close = document.getElementById("topic-detail-close")
  if (close) close.onclick = () => closeModal("topic-detail-modal")
}

const coupons = [
  { id: "c1", shop: "川味小馆", logo: "🍜", title: "满 30 减 8", save: 8, expire: "2025-03-20", status: "unused", daysLeft: 3, code: "X8K2" },
  { id: "c2", shop: "清晨豆花", logo: "🥣", title: "学生专享 9 折", save: 5, expire: "2025-04-01", status: "unused", daysLeft: 10, code: "STU9" },
  { id: "c3", shop: "甜点工坊", logo: "🍰", title: "满 50 减 15", save: 15, expire: "2025-03-10", status: "used", usedAt: "2025-03-09", review: "你评价了：辣子鸡绝了", code: "U5AB" }
]

const openCoupons = () => {
  openModal("coupons-modal")
  const close = document.getElementById("coupons-close")
  if (close) close.onclick = () => closeModal("coupons-modal")
  renderCoupons()
  bindCouponsUI()
}

const couponsState = { tab: "all", showDetail: false }

const renderCoupons = () => {
  const list = document.getElementById("coupons-list")
  const empty = document.getElementById("coupons-empty")
  const items = coupons.filter(c => couponsState.tab==="all" ? true : couponsState.tab==="unused" ? c.status==="unused" : c.status!=="unused")
  const total = coupons.filter(c => c.status==="unused").reduce((s,c)=>s+c.save,0)
  document.getElementById("coupons-saving-amount").textContent = `可节省 ${total} 元 · ${coupons.filter(c=>c.status==='unused').length} 张待使用`
  document.getElementById("coupons-saving-panel").innerHTML = coupons.filter(c => c.status==="unused").map(c => `<div class="coupon-meta">${c.shop} · ${c.title} ≈ 省 ${c.save} 元</div>`).join("")
  if (!items.length) {
    empty.style.display = "grid"
    list.innerHTML = ""
    return
  }
  empty.style.display = "none"
  list.innerHTML = items.map(c => `
    <div class="coupon-card swipe ${c.daysLeft && c.daysLeft<=3 ? 'warn' : ''}" data-id="${c.id}">
      <div class="top">
        <div><strong>${c.logo} ${c.shop}</strong></div>
        ${c.status==="unused" ? '<button class="primary" data-use="'+c.id+'">立即使用</button>' : ''}
      </div>
      <div class="coupon-title">${c.title}</div>
      <div class="coupon-meta">${c.status==="unused" ? `有效期至 ${c.expire}` : `已使用 · ${c.usedAt}`}</div>
      ${c.status!=="unused" && c.review ? `<div class="coupon-meta">${c.review} <button class="pill ghost" data-reget="${c.id}">再次领取</button></div>` : ''}
      <div class="coupon-actions">
        ${c.status==="unused" ? '' : ''}
      </div>
      <div class="swipe-actions" style="display:none">
        ${c.status==="unused" ? '<button class="pill ghost" data-remind="'+c.id+'">提醒我</button>' : '<button class="pill ghost" data-reget="'+c.id+'">再次领取</button>'}
        <button class="pill ghost" data-del="${c.id}">删除</button>
      </div>
    </div>
  `).join("")
  list.querySelectorAll('[data-use]').forEach(btn => {
    btn.onclick = () => showCouponCode(btn.getAttribute('data-use'))
  })
  list.querySelectorAll('[data-reget]').forEach(btn => {
    btn.onclick = () => {
      showToast("已重新领取")
      coinBurst(btn)
    }
  })
  list.querySelectorAll('[data-remind]').forEach(btn => {
    btn.onclick = () => showToast("到期前将提醒你")
  })
  list.querySelectorAll('[data-del]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-del')
      const idx = coupons.findIndex(c => c.id===id)
      if (idx>=0) coupons.splice(idx,1)
      renderCoupons()
    }
  })
  list.querySelectorAll('.coupon-card').forEach(card => attachSwipe(card, (type) => {
    const id = card.getAttribute('data-id')
    if (type==="del") {
      const idx = coupons.findIndex(c => c.id===id)
      if (idx>=0) coupons.splice(idx,1)
      renderCoupons()
    } else if (type==="read" || type==="top") {}
  }))
}

const bindCouponsUI = () => {
  const tabs = document.querySelectorAll('#coupons-tabs .tab-btn')
  const underline = document.getElementById('coupons-underline')
  const wrap = document.getElementById('coupons-tabs')
  const savingBtn = document.getElementById('coupons-saving-detail')
  const panel = document.getElementById('coupons-saving-panel')
  const updateUnderline = (el) => {
    const rect = el.getBoundingClientRect()
    const wrect = wrap.getBoundingClientRect()
    underline.style.transform = `translateX(${rect.left - wrect.left}px)`
    underline.style.width = rect.width + "px"
  }
  tabs.forEach(btn => {
    btn.onclick = () => {
      tabs.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      couponsState.tab = btn.dataset.tab
      renderCoupons()
      updateUnderline(btn)
    }
  })
  updateUnderline(document.querySelector('#coupons-tabs .tab-btn.active'))
  if (savingBtn) savingBtn.onclick = () => {
    couponsState.showDetail = !couponsState.showDetail
    panel.style.display = couponsState.showDetail ? "block" : "none"
  }
}

const showCouponCode = (id) => {
  const body = document.getElementById("coupon-code-body")
  const c = coupons.find(x => x.id===id)
  if (!c) return
  const code = c.code
  body.innerHTML = `<div style="display:grid;place-items:center;gap:8px">
    <div style="font-size:38px;letter-spacing:4px">${code}</div>
    <div class="muted">到店向店员出示此码</div>
  </div>`
  openModal("coupon-code-modal")
  const close = document.getElementById("coupon-code-close")
  if (close) close.onclick = () => closeModal("coupon-code-modal")
}

const openHelp = () => {
  openModal("help-modal")
  const close = document.getElementById("help-close")
  if (close) close.onclick = () => closeModal("help-modal")
  const feedback = document.getElementById("help-feedback")
  const contact = document.getElementById("help-contact")
  if (feedback) feedback.onclick = openFeedback
  if (contact) contact.onclick = openChat
}

const faqs = [
  { id: "f1", q: "如何进行学生认证？", a: "可使用学号/校园邮箱/学生证拍照三种方式认证。" },
  { id: "f2", q: "优惠券如何使用？", a: "在优惠券包中点击“立即使用”，在店里出示核销码即可。" },
  { id: "f3", q: "如何查看我的打卡足迹？", a: "在个人中心进入“我的足迹”，支持时间轴与地图视图。" }
]

const renderHelp = () => {
  const list = document.getElementById("help-faq-list")
  list.innerHTML = faqs.map(f => `<div class="faq-card" data-id="${f.id}"><strong>${f.q}</strong><div class="muted">查看详情</div></div>`).join("")
  list.querySelectorAll('.faq-card').forEach(card => {
    card.onclick = () => openFaqDetail(card.getAttribute('data-id'))
  })
  const sug = document.getElementById("help-suggest")
  sug.innerHTML = ["学生认证","优惠券","评价管理"].map(s => `<button class="pill ghost">${s}</button>`).join("")
  sug.querySelectorAll("button").forEach(b => {
    b.onclick = () => {
      document.getElementById("help-search-input").value = b.textContent
      renderHelpSuggest(b.textContent)
    }
  })
}

const bindHelp = () => {
  const input = document.getElementById("help-search-input")
  const btn = document.getElementById("help-search-btn")
  const egg = document.getElementById("help-egg")
  let taps = 0
  const fire = () => {
    const v = input.value.trim()
    renderHelpSuggest(v)
  }
  input.oninput = fire
  btn.onclick = fire
  egg.onclick = () => {
    taps++
    if (taps>=3) {
      showToast("需要人工哄哄吗？")
      taps = 0
    }
  }
  document.getElementById("help-faq").onclick = () => renderHelp()
  document.getElementById("help-feedback").onclick = openFeedback
  document.getElementById("help-contact").onclick = openChat
}

const renderHelpSuggest = (kw) => {
  const list = document.getElementById("help-faq-list")
  const matched = faqs.filter(f => f.q.includes(kw))
  if (kw && !matched.length) {
    list.innerHTML = `<div class="notification-item">未找到答案，试试“联系客服”</div>`
  } else {
    list.innerHTML = matched.map(f => `<div class="faq-card" data-id="${f.id}"><strong>${f.q}</strong><div class="muted">查看详情</div></div>`).join("")
    list.querySelectorAll('.faq-card').forEach(card => {
      card.onclick = () => openFaqDetail(card.getAttribute('data-id'))
    })
  }
}

const openFaqDetail = (id) => {
  const f = faqs.find(x => x.id===id) || { q: "问题详情", a: "稍后补充" }
  document.getElementById("faq-title").textContent = f.q
  document.getElementById("faq-body").innerHTML = `<div class="post-item"><span>${f.a}</span></div>`
  openModal("faq-detail-modal")
  const close = document.getElementById("faq-close")
  if (close) close.onclick = () => closeModal("faq-detail-modal")
  const yes = document.getElementById("faq-yes")
  const no = document.getElementById("faq-no")
  if (yes) yes.onclick = () => showToast("已反馈：有帮助")
  if (no) no.onclick = () => showToast("已反馈：没帮助")
}

const openFeedback = () => {
  openModal("feedback-modal")
  document.getElementById("feedback-close").onclick = () => closeModal("feedback-modal")
  document.getElementById("feedback-submit").onclick = () => {
    document.getElementById("feedback-success").style.display = "block"
    setTimeout(()=> closeModal("feedback-modal"), 1000)
  }
}

const openChat = () => {
  openModal("chat-modal")
  const list = document.getElementById("chat-list")
  const input = document.getElementById("chat-input")
  const send = document.getElementById("chat-send")
  document.getElementById("chat-close").onclick = () => closeModal("chat-modal")
  const pushBot = (text) => list.insertAdjacentHTML("beforeend", `<div class="msg bot"><div class="bubble">小觅助手：${text}</div></div>`)
  const pushYou = (text) => list.insertAdjacentHTML("beforeend", `<div class="msg you"><div class="bubble">${text}</div></div>`)
  pushBot("你好呀，我是小觅助手，有什么可以帮你？")
  const onSend = () => {
    const v = input.value.trim()
    if (!v) return
    pushYou(v)
    if (v.includes("生气") || v.includes("投诉")) {
      pushBot("已为你转接人工客服，当前排队 3 人")
    } else {
      pushBot("我来试着回答你：可以在个人中心-学生认证完成认证哦")
    }
    input.value = ""
  }
  send.onclick = onSend
  input.onkeydown = (e) => { if (e.key==="Enter") onSend() }
}

const coinBurst = (el) => {
  const rect = el.getBoundingClientRect()
  const c = document.createElement("div")
  c.style.position = "fixed"
  c.style.left = rect.left + "px"
  c.style.top = rect.top + "px"
  c.style.pointerEvents = "none"
  c.innerHTML = "💰"
  document.body.appendChild(c)
  setTimeout(()=> { c.remove() }, 800)
}
const footState = {
  view: "timeline",
  heat: false,
  year: String(new Date().getFullYear()),
  monthMin: 0
}

const renderFootTabs = () => {
  const t1 = document.getElementById("foot-tab-timeline")
  const t2 = document.getElementById("foot-tab-map")
  if (!t1 || !t2) return
  t1.classList.toggle("active", footState.view==="timeline")
  t2.classList.toggle("active", footState.view==="map")
  const tl = document.getElementById("footprint-timeline")
  const mp = document.getElementById("footprint-map")
  if (tl) tl.style.display = footState.view==="timeline" ? "grid" : "none"
  if (mp) mp.style.display = footState.view==="map" ? "block" : "none"
}

const footCheckins = () => {
  const data = state.checkins.slice()
  if (footState.year !== "全部") {
    return data.filter(c => new Date(c.time).getFullYear() === Number(footState.year))
  }
  return data
}

const renderFootYears = () => {
  const nav = document.getElementById("foot-year-nav")
  if (!nav) return
  const years = Array.from(new Set(state.checkins.map(c => new Date(c.time).getFullYear()))).sort((a,b)=>b-a)
  const items = years
  if (items.length && !items.map(String).includes(String(footState.year))) {
    footState.year = String(items[0])
  }
  nav.innerHTML = items.map(y => `<button class="year-chip ${footState.year===String(y)?'active':''}" data-y="${y}">${y}</button>`).join("")
  nav.querySelectorAll("button[data-y]").forEach(btn => {
    btn.onclick = () => {
      footState.year = String(btn.dataset.y)
      renderFootYears()
      renderFootTimeline()
      renderFootMap()
    }
  })
}

const renderFootTimeline = () => {
  const tl = document.getElementById("footprint-timeline")
  if (!tl) return
  const groups = {}
  footCheckins().forEach((c) => {
    const d = new Date(c.time || Date.now())
    const key = `${d.getFullYear()}年${d.getMonth()+1}月`
    if (!groups[key]) groups[key] = []
    groups[key].push(c.id)
  })
  const keys = Object.keys(groups).sort((a,b) => a < b ? 1 : -1)
  tl.innerHTML = keys.map(k => {
    const items = groups[k].map(id => restaurants.find(r => r.id === id)).filter(Boolean)
    const head = items.slice(0,2)
    const extra = items.slice(2)
    return `
      <div class="timeline-group">
        <div class="timeline-title" data-toggle="${k}">${k} · 打卡 ${items.length} 家餐厅</div>
        ${head.map(it => `
          <div class="timeline-item">
            <div><strong>${it.name}</strong> · ${it.tags[0]} · 人均 ${it.price} 元</div>
            <button class="pill ghost" data-open="${it.id}">查看</button>
          </div>
        `).join("")}
        ${extra.length ? `<button class="pill ghost" data-more="${k}">还有 ${extra.length} 家</button>
        <div class="timeline-extra" data-extra="${k}" style="display:none">
          ${extra.map(it => `
            <div class="timeline-item">
              <div><strong>${it.name}</strong> · ${it.tags[0]} · 人均 ${it.price} 元</div>
              <button class="pill ghost" data-open="${it.id}">查看</button>
            </div>
          `).join("")}
        </div>` : ``}
      </div>
    `
  }).join("")
  tl.querySelectorAll('button[data-open]').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-open')
      const item = restaurants.find(r => r.id === id)
      if (item) openDetail(item)
    }
  })
  tl.querySelectorAll('button[data-more]').forEach(btn => {
    btn.onclick = () => {
      const key = btn.getAttribute('data-more')
      const extra = tl.querySelector(`[data-extra="${key}"]`)
      if (!extra) return
      const show = extra.style.display==="none"
      extra.style.display = show ? "grid" : "none"
      btn.textContent = show ? "收起" : btn.textContent.replace("收起","")
    }
  })
}

const renderFootMap = () => {
  const mp = document.getElementById("footprint-map")
  if (!mp) return
  if (footState.view!=="map") return
  mp.querySelectorAll(".map-marker").forEach(n => n.remove())
  const monthMin = footState.monthMin
  const data = footCheckins().filter(c => new Date(c.time).getMonth() >= monthMin)
  const freq = {}
  data.forEach(c => { freq[c.id] = (freq[c.id]||0)+1 })
  Object.keys(freq).forEach(id => {
    const r = restaurants.find(r => r.id===id)
    if (!r) return
    const mk = document.createElement("div")
    mk.className = "map-marker"
    mk.style.left = r.marker.left
    mk.style.top = r.marker.top
    mk.textContent = r.name
    if (footState.heat) {
      const n = Math.min(1 + freq[id]*0.2, 2)
      mk.style.transform = `scale(${n})`
      mk.style.opacity = String(Math.min(0.6 + freq[id]*0.1, 1))
    }
    mk.onclick = () => openDetail(r)
    mp.appendChild(mk)
  })
}

const genReportData = () => {
  const data = state.checkins.slice()
  const byRest = {}
  data.forEach(c => byRest[c.id]=(byRest[c.id]||0)+1)
  const top = Object.entries(byRest).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([id,n]) => {
    const r = restaurants.find(r => r.id===id)
    return { name: r ? r.name : id, count: n }
  })
  const byCuisine = {}
  data.forEach(c => {
    const r = restaurants.find(r => r.id===c.id)
    if (!r) return
    const key = r.cuisine || r.type
    byCuisine[key] = (byCuisine[key]||0)+1
  })
  const cuisineList = Object.entries(byCuisine).sort((a,b)=>b[1]-a[1]).slice(0,5)
  return { total: data.length, top, cuisineList }
}

const openReport = () => {
  openModal("report-modal")
  const slides = document.getElementById("report-slides")
  const d = genReportData()
  slides.innerHTML = `
    <div class="timeline-group"><div class="timeline-title">2025 年度 · 美食回忆录</div><div class="timeline-item"><div><strong>${d.total}</strong> 家餐厅</div></div></div>
    <div class="timeline-group"><div class="timeline-title">你去得最多的店</div>${d.top.map(t=>`<div class="timeline-item"><div>${t.name} · ${t.count} 次</div></div>`).join("")}</div>
    <div class="timeline-group"><div class="timeline-title">你的年度菜系</div>${d.cuisineList.map(t=>`<div class="timeline-item"><div>${t[0]} · ${t[1]} 次</div></div>`).join("")}</div>
  `
  const close = document.getElementById("report-close")
  const share = document.getElementById("report-share")
  const replay = document.getElementById("report-replay")
  if (close) close.onclick = () => closeModal("report-modal")
  if (share) share.onclick = () => showToast("已生成分享卡片")
  if (replay) replay.onclick = () => openReport()
}

const bindFootUI = () => {
  const t1 = document.getElementById("foot-tab-timeline")
  const t2 = document.getElementById("foot-tab-map")
  const heat = document.getElementById("foot-heat")
  const range = document.getElementById("foot-time-range")
  const shake = document.getElementById("foot-shake")
  const report = document.getElementById("foot-report")
  if (t1) t1.onclick = () => { footState.view="timeline"; renderFootTabs(); renderFootTimeline() }
  if (t2) t2.onclick = () => { footState.view="map"; renderFootTabs(); renderFootMap() }
  if (heat) heat.onclick = () => { footState.heat = !footState.heat; renderFootMap() }
  if (range) range.oninput = () => { footState.monthMin = Number(range.value); renderFootMap() }
  if (shake) shake.onclick = () => {
    const ids = footCheckins().map(c => c.id)
    if (!ids.length) return
    const rand = ids[Math.floor(Math.random()*ids.length)]
    const r = restaurants.find(r => r.id===rand)
    if (r) {
      showToast(`还记得这家吗：${r.name}`)
    }
  }
  if (report) report.onclick = openReport
}
const updateBatchOptions = () => {
  const sel = document.getElementById("favorites-batch-move")
  if (!sel) return
  sel.innerHTML = state.folders.map(f => `<option value="${f}">${f}</option>`).join("")
}

const updateBatchBar = () => {
  const bar = document.getElementById("favorites-batch")
  const cnt = document.getElementById("favorites-batch-count")
  if (!bar || !cnt) return
  const on = state.favoriteManageMode
  bar.style.display = on ? "flex" : "none"
  cnt.textContent = `已选 ${state.favoriteSelection.length} 项`
  const del = document.getElementById("favorites-batch-delete")
  const moveSel = document.getElementById("favorites-batch-move")
  if (del) del.onclick = () => {
    state.favorites = state.favorites.filter(f => !state.favoriteSelection.includes(f.id))
    state.favoriteSelection = []
    updateFavoritesMeta()
    renderFavoritesList()
    renderFavoritesMap()
    updateBatchBar()
    showToast("已删除所选")
  }
  if (moveSel) moveSel.onchange = () => {
    const target = moveSel.value
    state.favorites.forEach(f => { if (state.favoriteSelection.includes(f.id)) f.folder = target })
    renderFavoritesList()
    renderFavoritesMap()
    showToast("已批量移动")
  }
}

const bindFolderModal = () => {
  const modal = document.getElementById("folder-modal")
  if (!modal) return
  const cancel = document.getElementById("folder-cancel")
  const name = document.getElementById("folder-name")
  const create = document.getElementById("folder-create")
  const icons = document.querySelectorAll("#folder-icons .icon-chip")
  let sel = "📁"
  icons.forEach(b => {
    b.onclick = () => {
      sel = b.dataset.ico
      icons.forEach(x => x.classList.remove("active"))
      b.classList.add("active")
    }
  })
  if (cancel) cancel.onclick = () => closeModal("folder-modal")
  if (create) create.onclick = () => {
    const n = name.value.trim().slice(0,10)
    if (!n) return
    if (state.folders.includes(n)) return alert("已存在同名文件夹")
    state.folders.push(n)
    state.folderIcons[n] = sel
    state.favoriteFolder = n
    closeModal("folder-modal")
    renderFavoritesFolders()
    renderFavoritesList()
    renderFavoritesMap()
    showToast("已创建文件夹")
  }
}

const init = () => {
  renderSchools()
  renderMarkers()
  renderMapList()
  renderQuickFilters()
  renderFilterTags("filter-cuisine", cuisines, state.filters.cuisines)
  renderFilterTags("filter-price", prices, state.filters.price)
  renderFilterTags("filter-status", statuses, state.filters.status)
  renderFilterTags("filter-tags-adv", tags, state.filters.tags)
  updateTagSummary()
  renderList()
  renderCommunity()
  bindNav()
  bindRangeSwitcher()
  bindAdvancedToggle()
  bindDetailActions()
  bindShake()
  bindLocate()
  bindMapLegend()
  bindSearch()
  bindNotifications()
  bindFavorites()
  bindFilterClear()
  bindProfileActions()
  bindProfileFeatures()
  bindFolderModal()
  renderChallenge()
  bindChallengeRoute()
  renderTopics()
  renderCheckinFeed()
  bindMeetup()
  bindPK()
  startCarousel()
  bindHotWords()
  bindWordCloud()
  updateFavoritesMeta()
  renderIdentity()
  updateFeatureBadges()
  updateHero(restaurants[0])
  setMapCard(restaurants[0])

  // 初始化收藏与足迹示例数据
  if (state.favorites.length === 0) {
    const seed = ["r1", "r7", "r8"].filter(id => restaurants.find(r => r.id===id))
    seed.forEach(id => { if (!state.favorites.find(f => f.id===id)) state.favorites.push({ id, folder: "二刷餐厅" }) })
    updateFavoritesMeta()
  }
  if (state.checkins.length === 0) {
    const now = new Date()
    const mk = (id, monthOffset) => {
      const d = new Date(now.getFullYear(), now.getMonth() - monthOffset, 12)
      state.checkins.push({ id, time: d.getTime() })
    }
    const ids = ["r1","r2","r5","r7","r9"].filter(id => restaurants.find(r=>r.id===id))
    ids.forEach((id, idx) => mk(id, idx))
    renderChallenge()
  }
}

init()
