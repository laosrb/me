// Mock API client for local development
// Replace this with your actual base44 client implementation

const mockDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

const mockBase44 = {
  auth: {
    me: async () => {
      await mockDelay();
      return { role: "user" }; // Change to "admin" to test admin features
    },
  },
  entities: {
    WorkExperience: {
      list: async (sort) => {
        await mockDelay();
        return [
          {
            id: 1,
            role: "Founder & CEO",
            company: "Two Mile Run Club (TMR)",
            type: "project",
            start_date: "2025-11-17",
            end_date: null,
            summary: "Founded and led a running club with a mission to help people achieve their running goals",
            company_logo_url: "https://media.licdn.com/dms/image/v2/D4E0BAQFPwCkPhMuXYA/company-logo_200_200/B4EZp6Jr.ZIwAI-/0/1762985951552?e=1764806400&v=beta&t=ECbQEfEUhfvfZY7zP8yZN0M6bl2ltwcEeQTCUa0GghI",
          },
          {
            id: 2,
            role: "Cafe Finder Software Developer",
            company: "Georgia State University",
            type: "project",
            start_date: "2025-08-02",
            end_date: null,
            summary: "Worked on the Cafe Finder project, a web application that allows users to find nearby cafes using the Google Maps API",
            company_logo_url: "https://image.similarpng.com/file/similarpng/very-thumbnail/2021/08/Coffee-logo-illustration-on-transparent-background-PNG.png",
          },
          {
            id: 3,
            role: "Full Stack Application Developer",
            company: "Automatic Data Processing (ADP)",
            type: "internship",
            start_date: "2025-05-27",
            end_date: "2025-08-01",
            summary: "Developed and maintained full-stack applications using Java, Spring Boot, Stencil.js, and AWS",
            company_logo_url: "https://media.licdn.com/dms/image/v2/D4E0BAQE2ALnzsL9mlw/company-logo_200_200/B4EZXS9EdvHMAM-/0/1743000979692/adp_logo?e=2147483647&v=beta&t=x79urndo28fasgnoAZqiq4mDvUjFjobwdm7WZaE68to",
          },
          {
            id: 4,
            role: "Network Engineer Intern",
            company: "Emory University Hospital",
            type: "internship",
            start_date: "2024-06-03",
            end_date: "2024-08-23",
            summary: "Worked on enterprise network infrastructure",
            company_logo_url: "https://media.licdn.com/dms/image/v2/D560BAQG6ekgvcKg3Wg/company-logo_200_200/B56ZiLHHixH0AU-/0/1754680556019/emory_university_logo?e=2147483647&v=beta&t=Gkji8idovtUVZYNoPxK37o17bQJDyrOA5AntnRzmqXc",
          },
          {
            id: 5,
            role: "Mobile Application Developer",
            company: "CodePath",
            type: "project",
            start_date: "2024-02-01",
            end_date: "2024-04-01",
            summary: "Developed and maintained mobile applications using Java, Kotlin, and Android Studio",
            company_logo_url: "https://media.licdn.com/dms/image/v2/C560BAQG2JeFuP6VNVQ/company-logo_200_200/company-logo_200_200/0/1652971578618/codepath_org_logo?e=2147483647&v=beta&t=E8pc7_Is4EllJD_VueqQVDqBcP54hli-HnMNQHptNCI",
          },
          {
            id: 6,
            role: "Python Instructor",
            company: "theCoderSchool",
            type: "work",
            start_date: "2024-05-01",
            end_date: "2024-06-01",
            summary: "Teaching Python programming fundamentals to students",
            company_logo_url: "https://media.licdn.com/dms/image/v2/C510BAQH2SniJjbph3Q/company-logo_200_200/company-logo_200_200/0/1631364103877?e=2147483647&v=beta&t=0m9kXYNQwamBncjh8H5hBkxDn-5yXkarm9rGNTcxncg",
          },
          {
            id: 7,
            role: "Customer Service Cashier",
            company: "Publix Super Market",
            type: "work",
            start_date: "2022-06-01",
            end_date: null,
            summary: "Provided excellent customer service and helped customers with their shopping needs",
            company_logo_url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Publix_Retail_Logo.png",
          },
        ];
      },
    },
    BlogPost: {
      list: async (sort) => {
        await mockDelay();
        return [
          {
            id: 1,
            title: "Welcome to My Portfolio",
            content: "This is my first blog post. More content coming soon!",
            is_visible: true,
            published_date: new Date().toISOString(),
            created_date: new Date().toISOString(),
          },
        ];
      },
      create: async (data) => {
        await mockDelay();
        return { id: Date.now(), ...data };
      },
      update: async (id, data) => {
        await mockDelay();
        return { id, ...data };
      },
    },
    YearlyGoal: {
      list: async (sort) => {
        await mockDelay();
        return [];
      },
    },
    BucketListItem: {
      list: async () => {
        await mockDelay();
        return [];
      },
    },
  },
};

export const base44 = mockBase44;

