# lite-toast-message

Lite and basic toast message

## Installation

`npm i lite-toast-message`

## Usage

```
import message from 'lite-toast-message'

message.info('Hello World')
```

or

```
import { success, error, warning, info } from 'lite-toast-message'

info('Hello World')
```

## Options

```
message.success('Message body', 'Title', 5000)
message.info('Message body', 'Title', 5000)
message.warning('Message body', 'Title', 5000)
message.error('Message body', 'Title', 5000)
```
