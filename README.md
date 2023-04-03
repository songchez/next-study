# 산체스의 Nelog (Next.js 강의)

드림코딩강의를 듣고 혼자만들어 본 블로그. 심심할때마다 재밌는 기능들을 추가할 예정.

## Authors

- [@songchez](https://github.com/songchez)

## Installation

Install my-project with npm

```bash
  git clone
  npm install
  npm run dev
```

## Deployment

<https://next-study-flax.vercel.app/>

## License

[MIT](https://choosealicense.com/licenses/mit/)

[![My Tech Stack](https://github-readme-tech-stack.vercel.app/api/cards?title=Tech%20Stack&lineCount=3&theme=hacker&line1=Next.js,Next.js,000000;node.js,node.js,339933;typescript,typescript,9ae746;&line2=vercel,vercel,000000;sanity,sanity,cb5e15;&line3=tailwindcss,tailwindcss,06B6D4;daisyui,daisyui,ad46d2;)](https://github-readme-tech-stack.vercel.app/api/cards?title=Tech%20Stack&lineCount=3&theme=hacker&line1=Next.js,Next.js,000000;node.js,node.js,339933;typescript,typescript,9ae746;&line2=vercel,vercel,000000;sanity,sanity,cb5e15;&line3=tailwindcss,tailwindcss,06B6D4;daisyui,daisyui,ad46d2;)

## FAQ

### Question 1. 누구세요?

산체스요

### Question 2. 뭐하는 사람이죠?

백수요

## 오류 log 1. ERROR

```typescript error
'ArticleCard'은(는) JSX 구성 요소로 사용할 수 없습니다.
해당 반환 형식 'Promise<Element>'은(는) 유효한 JSX 요소가 아닙니다.
'Promise<Element>' 형식에 'ReactElement<any, any>' 형식의 type, props, key 속성이 없습니다.ts(2786)
(alias) function ArticleCard({ post }: {
post: Post;
}): Promise<JSX.Element>
import ArticleCard
```

typescript에서 promise 요소는 jsx로 들어갈수가 없다..?!?!?!?!??.posts 데이터를
먼저 가져오고 각 post데이터의 author객체를 가지고 쿼리짜서 author 불러와야되는데, 컴포넌트로 분리하면 이렇게 Promise<Jsx.Element> 타입오류가 생긴다. 어떻게 해결해야 할까?(npm run dev로 실행되긴함.)

## 해결 log 1. 공식문서실패와, 알잘딱

<https://beta.nextjs.org/docs/data-fetching/fetching#server-component-functions>

공식문서를 확인해보니 서버컴포넌트에서 발생하는 promise오류를 무시하는 코드를 알려주었다. 근데 여기저기 다 넣어봐도
다 오류가 떳다 ㅠㅠ 그래서 걍 내방식대로 해결했다.

```typescript
{
  posts.map(async (post: any) => {
    const author = await getAuthorData({ author_id: post.author._ref });
    return <ArticleCard post={post} author={author} key={post._id} />;
  });
}
```

별건 아니고 그냥 메인 페이지 맵핑하는 곳에서 직접 fetch함수를 비동기로 불러왔다. 그랬더니 문제해결스. async가 걸린 serverComponent를 외부로 뺄때는 타입에러를 조심하자.
