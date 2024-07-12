import { useContext } from "react";
import { useForm } from "react-hook-form";

// import * as yup from "yup";
// import { AnyObject, TestContext } from "yup";
import { ButtonCustom } from "@/components/form/ButtonCustom";
import { InputCustom } from "@/components/form/InputCustom";
import { InputPasswordCustom } from "@/components/form/InputCustomPassword";
import { AppContext } from "@/contexts/app.contexts";
import { RegisterFormType } from "@/services/auth/type";

// const schema = yup.object().shape({
//   email: yup
//     .string()
//     .email("Vui lòng nhập đúng định dạng email")
//     .required("Vui lòng nhập email"),
//   password: yup
//     .string()
//     .required("Vui lòng nhập mật khẩu")
//     .min(
//       6,
//       "Mật khẩu phải trên 6 kí tự, có chữ hoa, chữ thường, số và kí tự đặc biệt",
//     ),
//   passwordConfirmation: yup
//     .string()
//     .trim()
//     .required("Vui lòng nhập xác nhận mật khẩu")
//     .test(
//       "empty",
//       "Xác nhận mật khẩu không trùng khớp",
//       (
//         confirm_password: string | undefined,
//         testContext: TestContext<AnyObject>,
//       ): boolean => {
//         if (!testContext.parent.password) return true;
//         return testContext.parent.password === confirm_password;
//       },
//     ),
// });

export const FormSignUp = () => {
  const { state, dispatch } = useContext(AppContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormType>({
    mode: "onChange",
    // resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterFormType) => {
    console.log(data);
  };

  return (
    <form onSubmitCapture={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <InputCustom
          name="email"
          control={control}
          errors={errors.email?.message}
          label="Email"
          placeholder="Nhập email"
        />
      </div>

      <div className="mb-4">
        <InputCustom
          name="phone"
          control={control}
          errors={errors.phone?.message}
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
        />
      </div>

      <div className="mb-4">
        <InputPasswordCustom
          name="password"
          control={control}
          errors={errors.password?.message}
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
        />
      </div>

      <div className="mb-4">
        <InputPasswordCustom
          name="passwordConfirmation"
          control={control}
          errors={errors.passwordConfirmation?.message}
          label="Nhập lại mật khẩu"
          placeholder="Nhập mật khẩu"
        />
      </div>

      <div className="mb-4">
        <InputCustom
          name="fullname"
          control={control}
          errors={errors.fullname?.message}
          label="Họ và tên"
          placeholder="Nhập họ tên"
        />
      </div>

      <ButtonCustom
        type="submit"
        title="Đăng ký"
        variant="contained"
        size="large"
        style="ease-in duration-200 hover:scale-105"
      />

      <div className="text-center mt-4">
        <span className="text-base">Bạn đã sẵn sàng đăng nhập? </span>
        <span
          className="font-medium text-base text-primary cursor-pointer"
          onClick={() => {
            if (!dispatch) return;

            dispatch({
              type: "OPENMODAL",
              payload: {
                ...state,
                openModal: "Signin",
              },
            });
          }}
        >
          Đăng nhập
        </span>
      </div>
    </form>
  );
};
