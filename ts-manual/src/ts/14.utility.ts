
/* Omit<T,K> */
type User = {
  id: number;
  name: string;
  email: string;
};

type UserWithoutEmail = Omit<User, "email">;
// 결과: { id: number; name: string }


/* Pick */
type User_ = {
  id: number;
  name: string;
  email: string;
};

type UserPreview = Pick<User_, "name" | "email">;
// 결과: { name: string; email: string }


/* Partial */
type _User = {
  id: number;
  name: string;
};

type PartialUser = Partial<User>;
// 결과: { id?: number; name?: string }
