const user = {
	name : 'tiger',
	age:30,
	gender:'male',
	address : '남양주시',
}

//User로 user의 타입들을 전부 뽑아낸다.
type User = typeof user;

if (typeof user === 'string'){

}

//User의 키를 뽑아서 UserKey에 union으로 할당
type UserKey = keyof User;

const settings = {
  theme: "dark",
  fontSize: 16,
  language: "ko"
};

type SettingsKey = keyof typeof settings;
// "theme" | "fontSize" | "language"

//typeof 뒤에는 js 객체가 와야 함.
//keyof 뒤에는 ts 타입이 와야 함.