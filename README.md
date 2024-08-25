# ✏️ TodoList 만들기 Next 14.Ver

- 배포 링크 : [클릭](todo-list-next-ver.vercel.app)

- 사용 기술 스택 : `TanStack Query`, `json-server`, `Fetch`, `SCSS`

  <br>
  <br>
  <br>

  
# ✏️ Fetch를 통한 HTTP 통신

- Next.js 공식문서에서 추천하는 `Fetch`로 데이터 통신을 진행해 보았습니다.
- `Api`요청을 보내는 기본적인 함수를 하나로 합쳐서 보일러 플레이트를 줄였습니다.

```ts
export const todoClient = async (
  endpoint: string,
  method: string,
  body?: InputForm
) => {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(`${SERVER_URL}${endpoint}`, options);

  const data = await res.json();
  return data;
};
```
  
<br>
<br>
<br>

# ✨ 기능 미리보기

<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/057633de-8411-4a06-9e48-895db90484e9" />
    </td>
    <td>내용을 작성하면, 등록되었다는 창과 함께 Working 영역에 등록이 됩니다.<br> 이때, 리스트들은 랜덤으로 부여한 색상으로 생성됩니다.</td>
  </tr>
    <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/f56dc656-ec11-4161-9526-14888eb290b7" />
    </td>
    <td>작성자가 제목이나 내용을 안했을 경우, formvalidation이 나옵니다.</td>
  </tr>
      <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/449c55e0-5c04-472e-8dd0-ebbe32b10898" />
    </td>
    <td>삭제 클릭시, 한번 더 경고창이 뜨고, 확인과 취소를 누르면 삭제가 완료되었습니다. 또는 삭제가 취소되었습니다. 라는 알림창을 띄워줍니다.</td>
  </tr>
      <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/bcc101fd-980b-48d7-81f3-76a04938dff4" />
    </td>
    <td>완료 클릭시 Done영역으로 이동합니다. 또는 취소 클릭시 `Working`영역으로 이동합니다. <br>이동 시 작업이 완료 되었습니다. 또는 작업이 미완료 상태로 이동 되었습니다. 라는 알림창을 띄워줍니다.</td>
  </tr>
</table>

<br>
<br>
<br>



