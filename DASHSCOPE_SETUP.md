# DashScope Qwen AI Integration Setup

## Configuration

### API Credentials
- **API Key:** `sk-ws-H.ILEYDR.6ejt.MEYCIQCcvlQ5ky89S7QroCpi3VnSnpvpuH1dAv7h9qjb5Vn4TAIhAI1UJl1NaDxdx3qFT6Cwls3mwlQkkPttOphJjzV527Aa`
- **API Host:** `ws-4ljejcvn8v9wvmny.ap-southeast-1.maas.aliyuncs.com`

### API Endpoints

#### DashScope Native Endpoint
```
https://ws-4ljejcvn8v9wvmny.ap-southeast-1.maas.aliyuncs.com/api/v1
```

#### OpenAI Compatible Endpoint
```
https://ws-4ljejcvn8v9wvmny.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1
```

## Environment Variables

Set these in your GitHub Secrets or `.env` file:

```
DASHSCOPE_API_KEY=sk-ws-H.ILEYDR.6ejt.MEYCIQCcvlQ5ky89S7QroCpi3VnSnpvpuH1dAv7h9qjb5Vn4TAIhAI1UJl1NaDxdx3qFT6Cwls3mwlQkkPttOphJjzV527Aa
DASHSCOPE_API_HOST=ws-4ljejcvn8v9wvmny.ap-southeast-1.maas.aliyuncs.com
DASHSCOPE_API_ENDPOINT=https://ws-4ljejcvn8v9wvmny.ap-southeast-1.maas.aliyuncs.com/api/v1
```

## GitHub Secrets Setup

1. Go to: https://github.com/irwantan/irwcrypto-ai/settings/secrets/actions
2. Add the following secrets:
   - `DASHSCOPE_API_KEY`
   - `DASHSCOPE_API_HOST`
   - `DASHSCOPE_API_ENDPOINT`

## Usage in Application

The AI service will use these credentials to:
- Analyze mining pool profitability
- Recommend optimal mining times
- Provide thermal management suggestions
- Auto-switch pools based on profitability

## API Reference

### Request Format (DashScope Native)

```bash
curl -X POST "https://ws-4ljejcvn8v9wvmny.ap-southeast-1.maas.aliyuncs.com/api/v1/services/aigc/text-generation/generation" \
  -H "Authorization: Bearer sk-ws-H.ILEYDR.6ejt.MEYCIQCcvlQ5ky89S7QroCpi3VnSnpvpuH1dAv7h9qjb5Vn4TAIhAI1UJl1NaDxdx3qFT6Cwls3mwlQkkPttOphJjzV527Aa" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen-turbo",
    "input": {
      "messages": [
        {
          "role": "user",
          "content": "Analyze mining pool profitability..."
        }
      ]
    },
    "parameters": {
      "temperature": 0.7
    }
  }'
```

### Request Format (OpenAI Compatible)

```bash
curl -X POST "https://ws-4ljejcvn8v9wvmny.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1/chat/completions" \
  -H "Authorization: Bearer sk-ws-H.ILEYDR.6ejt.MEYCIQCcvlQ5ky89S7QroCpi3VnSnpvpuH1dAv7h9qjb5Vn4TAIhAI1UJl1NaDxdx3qFT6Cwls3mwlQkkPttOphJjzV527Aa" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen-turbo",
    "messages": [
      {
        "role": "user",
        "content": "Analyze mining pool profitability..."
      }
    ],
    "temperature": 0.7
  }'
```

## Models Available

- `qwen-turbo` - Fast, good for real-time analysis
- `qwen-plus` - Balanced performance
- `qwen-max` - Most capable model

## Rate Limits

Check your DashScope dashboard for current rate limits and usage.
