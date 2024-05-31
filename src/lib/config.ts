export interface Config {
    name: string;
    githubUser: string;
    linkedinUserId: string;
    email: string;
    avatarHover: string;
    websiteUrl: string;
    aboutDescription: string;
}

export const config: Config = {
    name: "Taimur Hasan",
    githubUser: "tshasan",
    linkedinUserId: "taimurhasan1",
    email: "work@tshasan.com",
    avatarHover: "its a boy !",
    websiteUrl: "tshasan.com",
    aboutDescription: "I'm a 21-year-old full-stack software developer with a focus on artificial intelligence and open-source projects. I enjoy exploring new frameworks and contributing to the tech community. With experience in both front-end and back-end development, I bring a comprehensive approach to building innovative solutions. Here, you'll find my projects and insights as I continue to grow in the field."
};

export const { name, githubUser, linkedinUserId, email, avatarHover, websiteUrl, aboutDescription } = config;
