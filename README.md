### star

`pnpm dlx nuxi init nuxt-app`

### fix-bug
pnpm install --shamefully-hoist

.npmrc
shamefully-hoist=true

### 体系

nuxt3 + vue3 + unocss + autoImport + typescript


#  部署
pm2 star .output/server/index.mjs


## 检测npm包那些需要更新
npx taze -r

taze major -r