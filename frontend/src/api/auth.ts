import axios from "axios";
import { instance } from "./api";
import { IPersoanlToken } from "@/types/auth";

// 로그아웃
export const requestLogout = async () => {
  localStorage.clear();
};

// 추가 정보 입력
export const requestPersonalToken = async (
  personalAccessToken: IPersoanlToken
) => {
  return await instance.post(`/member`, personalAccessToken);
};

// private-token 요청
export const getPersonalToken = async () => {
  return await instance.get(`/member/personalAccessToken`);
};

// accessToken 재발급
export const requestReCreate = async (refresh: string) => {
  return await instance.post(refresh);
};