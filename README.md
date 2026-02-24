# 아인잉글리쉬 가격 페이지

원어민 1:1 영어 과외 가격 안내 랜딩 페이지입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:5173 접속

## 빌드

```bash
# 일반 빌드 (로컬/프리뷰용)
npm run build

# GitHub Pages 배포용 빌드
npm run build:gh
```

## GitHub Pages 배포

1. GitHub에 새 레포지토리 생성 (이름: `price-page` 권장)
2. 레포지토리 Settings → Pages → Source: **GitHub Actions** 선택
3. 코드 푸시:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/price-page.git
git push -u origin main
```

4. `main` 브랜치에 푸시하면 자동으로 GitHub Actions가 빌드 후 Pages에 배포됩니다.
5. 배포 완료 후 `https://YOUR_USERNAME.github.io/price-page/` 에서 확인

> **레포지토리 이름이 다른 경우**: `vite.config.js`의 `base` 값을 `/your-repo-name/`으로 수정하세요.
