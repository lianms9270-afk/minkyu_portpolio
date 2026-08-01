# 권민규 포트폴리오

정적 HTML/CSS/JS 사이트입니다. 별도 빌드 과정 없이 그대로 호스팅하면 됩니다.

## 구조

- `index.html` — 메인 페이지
- `404.html` — 404 에러 페이지
- `assets/css/style.css` — 스타일
- `assets/js/app.js` — 스크립트 (영상 재생, 스크롤 효과 등)
- `assets/pdf/` — 프로젝트 PDF 3개
- `assets/video/` — 3D 모션그래픽 영상
- `assets/covers/`, `assets/icons/`, `assets/og/` — 이미지 리소스

## GitHub Pages로 배포하기

1. 이 폴더 내용을 GitHub 저장소에 업로드/푸시합니다.
2. 저장소 **Settings → Pages**로 이동합니다.
3. **Source**를 `Deploy from a branch`로 설정하고, 브랜치는 `main`(또는 `master`), 폴더는 `/ (root)`를 선택합니다.
4. 저장 후 몇 분 뒤 `https://사용자명.github.io/저장소명/` 주소로 접속 가능합니다.

## 참고

- `assets/pdf/airbnb-ux.pdf` (약 90MB)와 `assets/video/video-01.mp4` (약 55MB)는 용량이 큰 파일입니다.
  GitHub 파일 하나당 제한은 100MB라 업로드 자체는 가능하지만, 웹 브라우저로 직접 드래그 앤 드롭 업로드는 안 될 수 있어 **GitHub Desktop** 앱 사용을 권장합니다.
- `vercel.json`은 Vercel 배포용 설정 파일로, GitHub Pages에서는 사용되지 않지만 남겨둬도 무방합니다.
