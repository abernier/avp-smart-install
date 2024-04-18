import { Metadata, ResolvingMetadata } from "next";

export type Props = {
  params: { lang: string; segments: string[] };
  searchParams?: Record<"string", any>; // (I) Nextjs returns a plain JS object (rather an URLSearchParams instance) (see: https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional:~:text=searchParams%20returns%20a%20plain%20JavaScript%20object%20and%20not%20a%20URLSearchParams%20instance.)
};

export default function Home(props: Props) {
  const { params } = props;
  const searchParams = new URLSearchParams(props.searchParams); // make it an URLSearchParams instance (because of (I))

  const id = searchParams.get("id");

  return (
    <form>
      <label>
        App id
        <input type="text" name="id" defaultValue={id ?? ""} />
      </label>
      <button>generate smart banner</button>
    </form>
  );
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = new URLSearchParams(props.searchParams); // make it an URLSearchParams instance (because of (I))

  return {
    itunes: {
      appId: searchParams.get("id") ?? "",
      // appArgument: "myAppArgument",
    },
  };
}
